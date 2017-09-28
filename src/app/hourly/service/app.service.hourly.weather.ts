import { IHourlyWeatherData } from '../model/IHourlyWeatherData';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HourlyWeatherService {
    //http://api.wunderground.com/api/8d55b1fea347ef26/hourly/q/CA/San_Francisco.json

   private _hourlyWeatherUrl = 'http://api.wunderground.com/api/8d55b1fea347ef26/hourly/q/CA/San_Francisco.json';
   constructor(private _http: Http) {
   }

   getHourlyWeatherData(): Observable<IHourlyWeatherData> {
      return this._http.get(this._hourlyWeatherUrl)
      .map((response: Response) => <IHourlyWeatherData> response.json());
      //.do(data => console.log(data));
   }
}