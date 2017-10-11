import { IThreeDayForecastData } from './threedayforecast/model/IThreeDayForecastData';
import { IHourlyForecast } from './threedayforecast/model/IThreeDayForecastData';
import { ThreeDayWeatherForecastService } from './threedayforecast/service/service.threedayforecast';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
//import * as d3 from 'd3';
//import * as Moment from 'moment';

//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [ThreeDayWeatherForecastService],
  templateUrl: `./threedayforecast/partials/threedayforecast.html`,
  styleUrls: ['./threedayforecast/css/threedayforecast.css'],
})
export default class ThreeDayForecastComponent {
  temperature: number[] = [];
  snow: number[] = [];
  windspeed: number[] = [];
  humidity: number[] = [];
  options: Object;
  iWeatherForecastData: IThreeDayForecastData | null;
  iWeatherHourlyForecast: IHourlyForecast | null;
  ngOnInit(): void {
    console.log('In ThreeDayForecastComponent Controller');
    try {
      const sChartTitle = "Temperature";
      const windspeed = "Wind Speed";
      const snow = "Snow";
      const humidity = "Humidity";
      this._WeatherService.getThreeDayForecastData()
      .subscribe((forecastResponse) => {
        this.iWeatherHourlyForecast = forecastResponse.forecast;
        this.parseDataForChart();
        this.options = {
          title : { text : 'Three Day Forecast' },
          series: [
            {
              name: sChartTitle,
              data: this.temperature,
            },
            {
              name: windspeed,
              data: this.windspeed,
            },
            {
              name: humidity,
              data: this.humidity,
            },
            {
              name: snow,
              data: this.snow,
            }

          ]
      };
      });
    } catch (e) {
        console.log('exception in component ', e.description);
    }
  }
  constructor(private _WeatherService: ThreeDayWeatherForecastService) {
  }
  parseDataForChart(): void {
    for (let item of this.iWeatherHourlyForecast.simpleforecast.forecastday) {
        this.temperature.push(parseInt(item.high.celsius));
    }
    for (let item of this.iWeatherHourlyForecast.simpleforecast.forecastday) {
      this.snow.push(parseInt(item.snow_allday.in));
    }
    for (let item of this.iWeatherHourlyForecast.simpleforecast.forecastday) {
      this.windspeed.push(parseInt(item.avewind.mph));
    }
    for (let item of this.iWeatherHourlyForecast.simpleforecast.forecastday) {
      this.humidity.push(parseInt(item.avehumidity));
    }
}
}
