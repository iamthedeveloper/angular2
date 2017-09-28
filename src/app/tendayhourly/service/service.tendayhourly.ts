//import { IHourlyWeatherData } from '../../hourly/model/IHourlyWeatherData';
import { ITendayHourly } from '../model/ITendayHourly';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class TenDayHourlyWeatherService {

   private _hourlyTenDayrUrl = 'http://api.wunderground.com/api/8d55b1fea347ef26/hourly10day/q/CA/San_Francisco.json';
   constructor(private _http: Http) {
   }

   getHourlyTenDayData(): Observable<ITendayHourly> {
      return this._http.get(this._hourlyTenDayrUrl)
      .map((response: Response) => <ITendayHourly> response.json());
      //.do(data => console.log(data));
   }
}