import { IThreeDayForecastData } from './threedayforecast/model/IThreeDayForecastData';
import { IHourlyForecast } from './threedayforecast/model/IThreeDayForecastData';
import { ThreeDayWeatherForecastService } from './threedayforecast/service/service.threedayforecast';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import * as d3 from 'd3';
//import * as Moment from 'moment';

//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [ThreeDayWeatherForecastService],
  templateUrl: `./threedayforecast/partials/threedayforecast.html`,
  styleUrls: ['./threedayforecast/css/threedayforecast.css'],
})
export default class ThreeDayForecastComponent {

  iWeatherForecastData: IThreeDayForecastData | null;
  iWeatherHourlyForecast: IHourlyForecast | null;
  ngOnInit(): void {
    console.log('In ThreeDayForecastComponent Controller');
    try {
      this._WeatherService.getThreeDayForecastData()
      .subscribe((forecastResponse) => {
        this.iWeatherHourlyForecast = forecastResponse.forecast;
      });
    } catch (e) {
        console.log('exception in component ', e.description);
    }
    const square = d3.selectAll('rect');
    square.style('fill', 'orange');
  }
  constructor(private _WeatherService: ThreeDayWeatherForecastService) {
  }
}
