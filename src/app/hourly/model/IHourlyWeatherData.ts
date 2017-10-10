// This is Used for TenDayForecast Service

export interface IHourlyWeatherData {
    hourly_forecast: Array<IWeatherHourlyForecast>;
    response: IWeatherFeatureInfo;
}

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

export interface IWeatherWindDirection {
    dir: string;
    degrees: string;
}


export interface IWeatherFeatureInfo {
    features: {};
    termsofService: string;
    version: string;
}

export interface IWeatherHourlyFCTIME {
        UTCDATE: string;
        age: string;
        ampm: string;
        civil: string;
        epoch: string;
        hour: string;
        hour_padded: string;
        isdst: string;
        mday: string;
        mday_padded: string;
        min: string;
        min_unpadded: string;
        mon: string;
        mon_abbrev: string;
        mon_padded: string;
        month_name: string;
        month_name_abbrev: string;
        pretty: string;
        sec: string;
        tz: string;
        weekday_name: string;
        weekday_name_abbrev: string;
        weekday_name_night: string;
        weekday_name_night_unlang: string;
        weekday_name_unlang: string;
        yday: string;
        year: string;
    }

    export interface IWeatherHourlyStandardMetric {
        english: string;
        metric: string;
    }

