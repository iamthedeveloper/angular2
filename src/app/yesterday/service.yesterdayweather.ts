import { IYesterday } from './IYesterday';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class YesterDayWeatherService {
    //http://api.wunderground.com/api/8d55b1fea347ef26/forecast/q/CA/San_Francisco.json

   private _forecastWeatherUrl = 'http://api.wunderground.com/api/8d55b1fea347ef26/yesterday/q/CA/San_Francisco.json';
   constructor(private _http: Http) {
   }

   getYesterdayData(): Observable<IYesterday> {
      return this._http.get(this._forecastWeatherUrl)
      .map((response: Response) => <IYesterday> response.json());
      //.do(data => console.log(data));
   }
}