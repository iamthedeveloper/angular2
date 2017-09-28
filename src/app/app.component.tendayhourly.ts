//import { IHourlyWeatherData } from './hourly/model/IHourlyWeatherData';
import { ITendayHourly } from './tendayhourly/model/ITendayHourly';
import { TenDayHourlyWeatherService } from './tendayhourly/service/service.tendayhourly';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import * as d3 from 'd3';
//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [TenDayHourlyWeatherService],
  templateUrl: `./tendayhourly/partials/tendayshourlyInfo.html`,
  styleUrls: ['./tendayhourly/css/tendayshourlyInfo.css'],
})
export default class TenDayHourlyComponent {

  iWeatherTendayHourlyData: ITendayHourly | null;

  ngOnInit(): void {
    console.log('In 10 Day Hourly Controller');
    try {
      const square = d3.selectAll('rect');
      this._WeatherService.getHourlyTenDayData()
        .subscribe((response) => {
          this.iWeatherTendayHourlyData = response;
          //        this.parseDataForChart();
        });
      square.style('fill', 'green');
    } catch (e) {
      console.log('exception in TenDayHourlyComponent component ', e.description);
    }
  }
  constructor(private _WeatherService: TenDayHourlyWeatherService) {
  }

  //   parseDataForChart():void {
  //     for (let item of this.iWeatherTendayData.hourly_forecast) {
  //       console.log(item.FCTTIME.hour);
  //       console.log(item.temp.english);
  //     }
  //   }
}
