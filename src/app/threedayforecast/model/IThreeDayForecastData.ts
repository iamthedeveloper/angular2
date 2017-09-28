
export interface IThreeDayForecastData {
    response: IHFResponse;
    forecast: IHourlyForecast;
}
export interface IHFResponse {
    version: string;
    termsofService: string;
    features: IHFversion;
}
export interface IHFversion {
    forecast: number;
}
export interface IHourlyForecast {
    txt_forecast: IHFTxtforecast;
    simpleforecast: IHFSimpleforecast;
}
export interface IHFTxtforecast {
    date: string;
    forecastday: Array<IHFForecastDay>;
}
export interface IHFForecastDay {
    fcttext: string;
    fcttext_metric: string;
    icon: string;
    icon_url: string;
    period: number;
    pop: string;
    title: string;
}
export interface IHFSimpleforecast {
    forecastday: Array<IHFSimpleForecastday>;
}
export interface ITemparatureType {
    fahrenheit: string;
    celsius: string;
}
export interface IHFDepth {
    in: number;
    mm: number;
}
export interface IHFSimpleForecastday {
    date: IHFSimpleForecastDate;
    period: number;
    high: ITemparatureType;
    low: ITemparatureType;
    conditions: string;
    icon: string;
    icon_url: string;
    skyicon: string;
    pop: number;
    qpf_allday: IHFDepth;
    qpf_day: IHFDepth;
    qpf_night: IHFDepth;
    snow_allday: IHFDepth;
    snow_day: IHFDepth;
    snow_night: IHFDepth;
    maxwind: IHFWindDirection;
    avewind: IHFWindDirection;
    avehumidity: number;
    maxhumidity: number;
    minhumidity: number;
}
export interface IHFWindDirection {
    mph: number;
    kph: number;
    dir: string;
    degrees: number;
}
export interface IHFSimpleForecastDate {
    epoch: string;
    pretty: string;
    day: number;
    month: number;
    year: number;
    yday: number;
    hour: number;
    min: string;
    sec: number;
    isdst: string;
    monthname: string;
    weekday_short: string;
    weekday: string;
    ampm: string;
    tz_short: string;
    tz_long: string;
}
