export interface IYesterday {
    response: response;
    history: history;
}
export interface response {
    version: string;
    termsofService: string;
    features : features;

}
export interface features {
    yesterday: number;
}
export interface history {
    date: utcdate;
    utcdate: utcdate;
    observations: Array<observation>;
    dailysummary: Array<summary>;
}
export interface summary {
    date: utcdate;
    fog: string;
    rain: string;
    snow: string;
    snowfallm: string;
    snowfalli: string;
    monthtodatesnowfallm: string;
    monthtodatesnowfalli: string;
    since1julsnowfallm: string;
    since1julsnowfalli: string;
    snowdepthm: string;
    snowdepthi: string;
    hail: string;
    thunder: string;
    tornado: string;
    meantempm: string;
    meantempi: string;
    meandewptm: string;
    meandewpti: string;
    meanpressurem: string;
    meanpressurei: string;
    meanwindspdm: string;
    meanwindspdi: string;
    meanwdire: string;
    meanwdird: string;
    meanvism: string;
    meanvisi: string;
    humidity: string;
    maxtempm: string;
    maxtempi: string;
    mintempm: string;
    mintempi: string;
    maxhumidity: string;
    minhumidity: string;
    maxdewptm: string;
    maxdewpti: string;
    mindewptm: string;
    mindewpti: string;
    maxpressurem: string;
    maxpressurei: string;
    minpressurem: string;
    minpressurei: string;
    maxwspdm: string;
    maxwspdi: string;
    minwspdm: string;
    minwspdi: string;
    maxvism: string;
    maxvisi: string;
    minvism: string;
    minvisi: string;
    gdegreedays: string;
    heatingdegreedays: string;
    coolingdegreedays: string;
    precipm: string;
    precipi: string;
    precipsource: string;
    heatingdegreedaysnormal: string;
    monthtodateheatingdegreedays: string;
    monthtodateheatingdegreedaysnormal: string;
    since1sepheatingdegreedays: string;
    since1sepheatingdegreedaysnormal: string;
    since1julheatingdegreedays: string;
    since1julheatingdegreedaysnormal: string;
    coolingdegreedaysnormal: string;
    monthtodatecoolingdegreedays: string;
    monthtodatecoolingdegreedaysnormal: string;
    since1sepcoolingdegreedays: string;
    since1sepcoolingdegreedaysnormal: string;
    since1jancoolingdegreedays: string;
    since1jancoolingdegreedaysnormal: string;
}
export interface observation {
    date: utcdate;
    utcdate: utcdate;
    tempm: string;
    tempi: string;
    dewptm: string;
    dewpti: string;
    hum: string;
    wspdm: string;
    wspdi: string;
    wgustm: string;
    wgusti: string;
    wdird: string;
    wdire: string;
    vism: string;
    visi: string;
    pressurem: string;
    pressurei: string;
    windchillm: string;
    windchilli: string;
    heatindexm: string;
    heatindexi: string;
    precipm: string;
    precipi: string;
    conds: string;
    icon: string;
    fog: string;
    rain: string;
    snow: string;
    hail: string;
    thunder: string;
    tornado: string;
    metar: string;
}
export interface utcdate {
    pretty: string;
    year: string;
    mon: string;
    mday:string;
    hour: string;
    min: string;
    tzname: string;
}