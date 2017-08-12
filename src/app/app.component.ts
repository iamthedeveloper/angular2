import { WeatherService } from './app.service.weather';
import { Component, OnInit } from '@angular/core';
import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';

import { IWeatherWeekData } from './weather';

@Component({
  selector: 'my-app',
  providers: [WeatherService],
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: `./partials/app.component.table.html`,
  styleUrls: ['./css/app.component.style.css'],
})
export class AppComponent {
  name = 'Angular ' + new Date().getDate();
  //api: http://api.oceandrivers.com/v1.0/getSocibWeatherStation/mclean/lastday/
  //Period: lastdata | lasthour | lastday

  iWeatherWeekData: IWeatherWeekData;


  ngOnInit(): void {
    this._WeatherService.getweatherWeeklyData()
      .subscribe(iWeatherWeekData => this.iWeatherWeekData = iWeatherWeekData);
      try {
            country = jsonConvert.deserialize(jsonObject, Country);
            country.cities[0].printInfo(); // prints: Basel was founded in -200 and is really beautiful!
        } catch (e) {
            console.log((<Error>e));
        }
  }
  constructor(private _WeatherService: WeatherService) {
  }
}