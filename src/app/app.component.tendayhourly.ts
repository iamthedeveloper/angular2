import { ITendayHourly } from './tendayhourly/model/ITendayHourly';
import { TenDayHourlyWeatherService } from './tendayhourly/service/service.tendayhourly';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [TenDayHourlyWeatherService],
  templateUrl: `./tendayhourly/partials/tendayshourlyInfo.html`,
  styleUrls: ['./tendayhourly/css/tendayshourlyInfo.css'],
})
export default class TenDayHourlyComponent {

  iWeatherTendayHourlyData: ITendayHourly | null;
  temperature: number[] = [];
  options: Object;
  ngOnInit(): void {
    console.log('In 10 Day Hourly Controller');
    try {
      const sChartTitle = "Tendays's Hourly Forecast";
      this._WeatherService.getHourlyTenDayData()
        .subscribe((response) => {
          this.iWeatherTendayHourlyData = response;
          this.parseDataForChart();
          this.options = {
              title : { text : sChartTitle },
              series: [{
                data: this.temperature
              }]
            };
        });
    } catch (e) {
      console.log('exception in TenDayHourlyComponent component ', e.description);
    }
  }
  constructor(private _WeatherService: TenDayHourlyWeatherService) {
  }

  parseDataForChart(): void {
    for (let item of this.iWeatherTendayHourlyData.hourly_forecast) {
        this.temperature.push(parseInt(item.temp.english));
    }
  }

}
