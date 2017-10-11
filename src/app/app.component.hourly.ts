import { IHourlyWeatherData } from './hourly/model/IHourlyWeatherData';
import { HourlyWeatherService } from './hourly/service/app.service.hourly.weather';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [HourlyWeatherService],
  templateUrl: `./hourly/partials/app.component.hourly.html`,
  styleUrls: ['./hourly/css/app.component.hourly.css'],
})
export default class HourlyComponent {

  iWeatherHourlyData: IHourlyWeatherData | null;
  options: Object;
  chart: Object;
  temperature: number[] = [];
  windspeed: number[] = [];
  humidity: number[] = [];
  snow: number[] = [];
  ngOnInit(): void {
    console.log('In HourlyComponent Controller');
    try {
      const sChartTitle = 'Hourly Temperature';
      const windspeed = 'Wind Speed';
      const humidity = 'Humidity';
      const snow = 'Snow';
      this._WeatherService.getHourlyWeatherData()
      .subscribe((response) => {
        this.iWeatherHourlyData = response;
        this.parseDataForChart();
        this.options = {
          title : { text : sChartTitle },
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
  constructor(private _WeatherService: HourlyWeatherService) {
  }

  parseDataForChart(): void {
    for (let item of this.iWeatherHourlyData.hourly_forecast) {
      this.temperature.push(parseInt(item.temp.english));
    }
    for (let item of this.iWeatherHourlyData.hourly_forecast) {
      this.windspeed.push(parseInt(item.wspd.english));
    }
    for (let item of this.iWeatherHourlyData.hourly_forecast) {
      this.humidity.push(parseInt(item.humidity));
    }
    for (let item of this.iWeatherHourlyData.hourly_forecast) {
      this.snow.push(parseInt(item.snow.english));
    }
  }
}
