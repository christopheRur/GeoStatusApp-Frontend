import { Component, OnInit } from '@angular/core';
import { geo } from 'src/app/geo';
import { geoConstants } from 'src/app/geoConstants';
import { GeoService } from 'src/app/services/geo.service';

@Component({
  selector: 'app-geo-stat',
  templateUrl: './geo-stat.component.html',
  styleUrls: ['./geo-stat.component.scss']
})
export class GeoStatComponent implements OnInit {

  constructor(private geoServ:GeoService) { }

viewBlock:boolean=false;


  asn=geoConstants.ASN;
  city=geoConstants.CITY;
  continent_code=geoConstants.CONTINENT_CODE;
  country=geoConstants.COUNTRY;
  country_area=geoConstants.COUNTRY_AREA;
  country_calling_code=geoConstants.COUNTRY_CALLING_CODE;
  country_capital=geoConstants.COUNTRY_CAPITAL;
  country_code=geoConstants.COUNTRY_CODE;
  country_code_IS03=geoConstants.COUNTRY_CODE_ISO3;
  country_name=geoConstants.COUNTRY_NAME;
  country_population=geoConstants.COUNTRY_POPULATION;
  country_tld=geoConstants.COUNTRY_TLD;
  currency=geoConstants.CURRENCY;
  currency_name=geoConstants.CURRENCY_NAME;
  in_eu=geoConstants.IN_EU;
  ip=geoConstants.IP;
  language=geoConstants.LANGUAGES;
  latitude=geoConstants.LATITUDE;
  longitude=geoConstants.LONGITUDE;
  network = geoConstants.NETWORK;
  org=geoConstants.ORG;
  postal=geoConstants.POSTAL;
  region=geoConstants.REGION;
  region_code=geoConstants.REGION_CODE;
  timezone=geoConstants.TIMEZONE;
  utc_offset=geoConstants.UTC_OFFSET;
  version=geoConstants.VERSION

  asnRes?:string;
  cityRes?:string;
  continent_codeRes?:string
  countryRes?:string;
  country_areaRes?:number;
  country_calling_codeRes?:string;
  country_capitalRes?:string;
  country_codeRes?:string;
  country_code_iso3Res?:string;
  country_nameRes?:string;
  country_populationRes?:number;
  country_tldRes?:string;
  currencyRes?:string;
  currency_nameRes?:string;
  in_euRes?:boolean;
  ipRes?:string;
  languagesRes?:string;
  latitudeRes?:number;
  longitudeRes?:number;
  networkRes?:string;
  orgRes?:string;
  postalRes?:string;
  regionRes?:string;
  region_codeRes?:string;
  timezoneRes?:string;
  utc_offsetRes?:string;
  versionRes?:string;


  ngOnInit(): void {

  }

/**
 * Display block of status
 */
  public displayBlock(){
    this.retrieveGeoStatusInformation();
    this.viewBlock=!this.viewBlock;
  }

/**
 *Retrieve status from backend
 */
  public retrieveGeoStatusInformation():void{

this.geoServ.getGeoStatus().subscribe(
  (response:geo)=>{

this.setAllStatusValues(response);

  }
)

  }

private setAllStatusValues(response:geo):void{

  this.asnRes=response.asn;
  this.cityRes=response.city;
  this.continent_codeRes=response.continent_code;
  this.countryRes=response.country;
  this.country_areaRes=response.country_area;
  this.country_calling_codeRes=response.country_calling_code;
  this.country_capitalRes=response.country_capital;
  this.country_codeRes=response.country_code;
  this.country_code_iso3Res=response.country_code_iso3;
  this.country_nameRes=response.country_name;
  this.country_populationRes=response.country_population;
  this.country_tldRes=response.country_tld;
  this.currencyRes=response.currency;
  this.currency_nameRes=response.currency_name;
  this.in_euRes=response.in_eu;
  this.ipRes=response.ip;
  this.languagesRes=response.languages;
  this.latitudeRes=response.latitude;
  this.longitudeRes=response.longitude;
  this.networkRes=response.network;
  this.orgRes=response.org;
  this.postalRes=response.postal;
  this.regionRes=response.region;
  this.region_codeRes=response.region_code;
  this.timezoneRes=response.timezone;
  this.utc_offsetRes=response.utc_offset;
  this.versionRes=response.version;


}

}
