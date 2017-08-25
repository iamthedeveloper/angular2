import { IWeatherHourlyFCTIME } from './IWeatherHourlyFCTIME';
import { IWeatherHourlyStandardMetric } from './IWeatherHourlyStandardMetric';
import { IWeatherWindDirection } from './IWeatherWindDirection';

export interface IWeatherHourlyForecast {
    FCTTIME: IWeatherHourlyFCTIME;
    dewpoint: IWeatherHourlyStandardMetric;
    feelslike: IWeatherHourlyStandardMetric;
    heatindex: IWeatherHourlyStandardMetric;
    mslp: IWeatherHourlyStandardMetric;
    qpf: IWeatherHourlyStandardMetric;
    snow: IWeatherHourlyStandardMetric;
    temp: IWeatherHourlyStandardMetric;
    wdir: IWeatherWindDirection;
    windchill: IWeatherHourlyStandardMetric;
    wspd: IWeatherHourlyStandardMetric;

    condition: string;
    fctcode: string;
    humidity: string;
    icon: string;
    icon_url: string;
    pop: string;
    sky: string;
    uvi: string;
    wx: string;
}
