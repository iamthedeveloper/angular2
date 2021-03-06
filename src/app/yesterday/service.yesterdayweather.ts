import { IYesterday } from './IYesterday';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Injectable()
export class YesterDayWeatherService {
    //http://api.wunderground.com/api/8d55b1fea347ef26/forecast/q/CA/San_Francisco.json

   private _forecastWeatherUrl = 'http://api.wunderground.com/api/8d55b1fea347ef26/yesterday/q/CA/San_Francisco.json';

  getYesterdayData(): Observable<IYesterday> {
    return this._http.get(this._forecastWeatherUrl)
    .map((response: Response) => <IYesterday> response.json());
    //.do(data => console.log(data));
 }
  constructor(private _http: Http) {
}

}
