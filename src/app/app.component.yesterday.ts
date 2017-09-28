
import { IYesterday } from './yesterday/IYesterday';
import { YesterDayWeatherService } from './yesterday/service.yesterdayweather';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import * as d3 from 'd3';
//import * as Moment from 'moment';

//8d55b1fea347ef26


@Component({
    selector: 'my-app',
    providers: [YesterDayWeatherService],
    templateUrl: `./yesterday/partials/yesterday.html`,
    styleUrls: ['./yesterday/css/yesterday.css']
})
export default class Yesterday {

    iWeatheryesterday: IYesterday | null;
    ngOnInit(): void {
    console.log('In Controller');
    try {
        this._WeatherService.getYesterdayData()
        .subscribe((yestedayResponse) => {
        console.log(yestedayResponse.history.observations[0].heatindexi);
        this.iWeatheryesterday = yestedayResponse;
        });
    } catch (e) {
        console.log('exception in component ', e.description);
    }
    const square = d3.selectAll('rect');
    square.style('fill', 'orange');
    }
    constructor(private _WeatherService: YesterDayWeatherService) {
    }
}
