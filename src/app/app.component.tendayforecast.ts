import TenDayForecastWeatherService from './tendayforecast/service/service.tendaysforecast';
import {ITendayWeatherForecast} from './tendayforecast/model/ITendayWeatherForecast';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [TenDayForecastWeatherService],
  templateUrl: `./tendayforecast/partials/tendayforecast.html`,
  styleUrls: ['./tendayforecast/css/tendayforecast.css'],
})
export default class TenDayForecastComponent {

  iWeatherTendayforecastData: ITendayWeatherForecast | null;
  options: Object;
  temperature: number[] = [];
  ngOnInit(): void {
    console.log('In 10 Day Controller');
    try {
      const sChartTitle = "Ten Day's forecast Temperature";
      this._WeatherService.getTenDayForecastData()
        .subscribe((response) => {
          this.iWeatherTendayforecastData = response;
          this.parseDataForChart();
          this.options = {
              title : { text : sChartTitle },
              series: [{
                data: this.temperature
              }]
            };
        });
    } catch (e) {
      console.log('exception in TenDayForecastComponent ', e.description);
    }
  }
  constructor(private _WeatherService: TenDayForecastWeatherService) {
  }

  parseDataForChart(): void {
    for (let item of this.iWeatherTendayforecastData.hourly_forecast) {
        this.temperature.push(parseInt(item.temp.english));
    }
}
}
