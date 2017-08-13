import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IWeatherWeekData } from './weather';

@Injectable()
export class WeatherService {
   private _weeklyWeatherUrl = 'http://api.oceandrivers.com/v1.0/getSocibWeatherStation/mclean/lastday/';
   constructor(private _http: Http) {
   }

   getweatherWeeklyData(): Observable<IWeatherWeekData> {
      return this._http.get(this._weeklyWeatherUrl)
      .map((response: Response) => <IWeatherWeekData> response.json());
      //.do(data => console.log(JSON.stringify(data)));
   }
} 