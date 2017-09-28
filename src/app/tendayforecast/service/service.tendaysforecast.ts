import { ITendayWeatherForecast } from '../model/ITendayWeatherForecast';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export default class TenDayForecastWeatherService {
    private _forecastTenDayrUrl = 'http://api.wunderground.com/api/8d55b1fea347ef26/forecast10day/q/CA/San_Francisco.json';
   constructor(private _http: Http) {
   }

   getTenDayForecastData(): Observable<ITendayWeatherForecast> {
      return this._http.get(this._forecastTenDayrUrl)
      .map((response: Response) => <ITendayWeatherForecast> response.json());
      //.do(data => console.log(data));
   }
}