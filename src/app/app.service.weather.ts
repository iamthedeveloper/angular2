import { IWeatherData } from './IWeatherData';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class WeatherService {
    //http://api.wunderground.com/api/8d55b1fea347ef26/hourly/q/CA/San_Francisco.json

   private _weeklyWeatherUrl = 'http://api.wunderground.com/api/8d55b1fea347ef26/hourly/q/CA/San_Francisco.json';
   constructor(private _http: Http) {
   }

   getweatherWeeklyData(): Observable<IWeatherData> {
      return this._http.get(this._weeklyWeatherUrl)
      .map((response: Response) => <IWeatherData> response.json());
      //.do(data => console.log(data));
   }
}
