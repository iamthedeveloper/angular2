import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import HourlyComponent from './app.component.hourly';
import ThreeDayForecastComponent from './app.component.threedayforecast';
import DynamicComponent from './app.component.dynamic';
import TenDayHourlyComponent from './app.component.tendayhourly';
import YesterdayComponent from './app.component.yesterday';
import TenDayForecastComponent from './app.component.tendayforecast';

//8d55b1fea347ef26


@Component({
  selector: 'my-app',
  providers: [],
  templateUrl: `./apppartials/app.component.table.html`,
  styleUrls: ['./appcss/app.component.style.css'],
})
export default class AppComponent {
  componentData: any = null;
  whichComponent(whichComponent: any) {
    switch (whichComponent.srcElement.innerHTML) {
      case 'Yesterday': {
        console.log('Yesterday: ', whichComponent);
        this.componentData = {
          component: YesterdayComponent,
          inputs: {
          }
        };
        break;
      }
      case 'Hourly': {
        console.log('Hourly: ', whichComponent);
        this.componentData = {
          component: HourlyComponent,
          inputs: {
          }
        };
        break;
      }
      case 'Now': {
        console.log('Now: ', whichComponent);
        this.componentData = {
          component: HourlyComponent,
          inputs: {
          }
        };
        break;
      }
      case '3 Day Forecast': {
        console.log('3 Day Forecast: ', whichComponent);
        this.componentData = {
          component: ThreeDayForecastComponent,
          inputs: {
          }
        };
        break;
      }
      case '10 Day Forecast': {
        this.componentData = {
          component: TenDayForecastComponent,
          inputs: {
          }
        };
        break;
      }
      case '10 Day Hourly': {
        console.log('10 Day Hourly: ', whichComponent);
        this.componentData = {
          component: TenDayHourlyComponent,
          inputs: {
          }
        };
        break;
      }
    }
  }

  ngOnInit(): void {
    console.log('In Controller');
  }
  constructor() {
  }
}

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, DynamicComponent, HourlyComponent, ThreeDayForecastComponent,
    TenDayHourlyComponent, YesterdayComponent, TenDayForecastComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

