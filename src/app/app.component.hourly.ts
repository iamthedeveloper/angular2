import { IHourlyWeatherData } from './hourly/model/IHourlyWeatherData';
import { HourlyWeatherService } from './hourly/service/app.service.hourly.weather';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
//import * as d3 from 'd3';
//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [HourlyWeatherService],
  templateUrl: `./hourly/partials/app.component.hourly.html`,
  styleUrls: ['./hourly/css/app.component.hourly.css'],
})
export default class HourlyComponent {

  iWeatherHourlyData: IHourlyWeatherData | null;

  ngOnInit(): void {
    console.log('In HourlyComponent Controller');
    try {
//      const square = d3.selectAll('rect');
      this._WeatherService.getHourlyWeatherData()
      .subscribe((response) => {
        this.iWeatherHourlyData = response;
        //this.parseDataForChart();
      });
//      square.style('fill', 'green');
    } catch (e) {
        console.log('exception in component ', e.description);
    }
  }
  constructor(private _WeatherService: HourlyWeatherService) {
  }

  parseDataForChart():void {
    for (let item of this.iWeatherHourlyData.hourly_forecast) {
      console.log(item.FCTTIME.hour);
      console.log(item.temp.english);
    }
  }
}
