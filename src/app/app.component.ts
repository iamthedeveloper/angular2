import { IWeatherData } from './IWeatherData';
import { WeatherService } from './app.service.weather';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [WeatherService],
  templateUrl: `./partials/app.component.table.html`,
  styleUrls: ['./css/app.component.style.css'],
})
export class AppComponent {

  iWeatherWeekData: IWeatherData | null;

  ngOnInit(): void {
    console.log('In Controller');
    try {
      this._WeatherService.getweatherWeeklyData()
      .subscribe((response) => {
        this.iWeatherWeekData = response;
      });
    } catch (e) {
        console.log('exception in component ', e.description);
    }
  }
  constructor(private _WeatherService: WeatherService) {
  }
}
