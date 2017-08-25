import { IWeatherHourlyForecast } from './IWeatherHourlyForecast';
import { IWeatherFeatureInfo } from './IWeatherFeatureInfo';

export interface IWeatherData {
    hourly_forecast: Array<IWeatherHourlyForecast>;
    response: IWeatherFeatureInfo;
}
