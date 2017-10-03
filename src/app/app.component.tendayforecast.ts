import TenDayForecastWeatherService from './tendayforecast/service/service.tendaysforecast';
import {ITendayWeatherForecast} from './tendayforecast/model/ITendayWeatherForecast';

import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
//import * as d3 from 'd3';
//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [TenDayForecastWeatherService],
  templateUrl: `./tendayforecast/partials/tendayforecast.html`,
  styleUrls: ['./tendayforecast/css/tendayforecast.css'],
})
export default class TenDayForecastComponent {

  iWeatherTendayforecastData: ITendayWeatherForecast | null;

  ngOnInit(): void {
    console.log('In 10 Day Controller');
    try {
//      const square = d3.selectAll('rect');
      this._WeatherService.getTenDayForecastData()
        .subscribe((response) => {
          this.iWeatherTendayforecastData = response;
          //        this.parseDataForChart();
        });
//      square.style('fill', 'green');
    } catch (e) {
      console.log('exception in TenDayForecastComponent ', e.description);
    }
  }
  constructor(private _WeatherService: TenDayForecastWeatherService) {
  }

  //   parseDataForChart():void {
  //     for (let item of this.iWeatherTendayData.hourly_forecast) {
  //       console.log(item.FCTTIME.hour);
  //       console.log(item.temp.english);
  //     }
  //   }
}
