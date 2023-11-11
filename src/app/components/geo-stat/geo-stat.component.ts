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


  ngOnInit(): void {
   // this.retrieveGeoStatusInformation();
  }

/**
 *Retrieve status from backend
 */
  public retrieveGeoStatusInformation():void{

this.geoServ.getGeoStatus().subscribe(
  (response:geo)=>{

console.log("------------------=-==-=-=-=-=-=--=-=-==->"+response.country_calling_code);


  }
)
  }

}
