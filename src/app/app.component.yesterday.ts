
import { IYesterday } from './yesterday/IYesterday';
import { YesterDayWeatherService } from './yesterday/service.yesterdayweather';
import { Component, ElementRef, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import 'highcharts/adapters/standalone-framework.src';

//8d55b1fea347ef26


@Component({
    selector: 'my-app',
    providers: [YesterDayWeatherService],
    templateUrl: `./yesterday/partials/yesterday.html`,
    styleUrls: ['./yesterday/css/yesterday.css']
})
export default class Yesterday {
    @ViewChild('charts') public chartEl: ElementRef;
    iWeatheryesterday: IYesterday | null;
    options: Object;
    temperature: number[] = [];
    ngOnInit(): void {
    console.log('In Controller');
    try {
        const sChartTitle = "Yesterday's Temperature";
        this._WeatherService.getYesterdayData()
        .subscribe((yestedayResponse) => {
        console.log(yestedayResponse.history.observations[0].heatindexi);
        this.iWeatheryesterday = yestedayResponse;
        this.parseDataForChart();
        this.options = {
            title : { text : sChartTitle },
            series: [{
              data: this.temperature
            }]
          };
        });
    } catch (e) {
        console.log('exception in component ', e.description);
    }
    }
    constructor(private _WeatherService: YesterDayWeatherService) {
    }

    parseDataForChart(): void {
        for (let item of this.iWeatheryesterday.history.observations) {
            this.temperature.push(parseInt(item.tempi));
        }
    }
}
