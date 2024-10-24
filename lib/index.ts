import { offsetByCity,ianaTzCodeEast,ianaTzCodeWest,timeZoneAbbr  } from './cityOffsetMap'
import { junctionFormat, replaceFormat, replaceFormatInput } from './format'

const setLocale = "en-US";

export function compareLocal(date?:string) {
  if(date){
    const initDate = new Date(date);
    return `${initDate.toLocaleString()} / ${initDate.getTimezoneOffset()} | ${Intl.DateTimeFormat().resolvedOptions().timeZone}`
  }
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

function tzOffset(date:string){
  let offset;
  if(date){
    Object.keys(timeZoneAbbr).forEach(abbr => {
      if(date.toLocaleUpperCase().includes(abbr.toLocaleUpperCase())){
        offset = timeZoneAbbr[abbr as keyof typeof timeZoneAbbr];
      }
    });
  }
  return offset;
}

function gmtOffset(city:string){
  let gmtOffset:number = -24;
  if(city){
    Object.keys(offsetByCity).forEach(citys => {
      if(citys.toLocaleLowerCase().includes(city.toLocaleLowerCase()) && gmtOffset==-24){
        gmtOffset = offsetByCity[citys as keyof typeof offsetByCity];
      }
    });
  }
  return gmtOffset;
}

export function tzCompare(cityName?:string,locale?:string,dst?:boolean) {
  
  if(cityName){

    const currentDate = new Date();
    const timezoneOffset = (currentDate.getTimezoneOffset()/-60);
    const offset:number = dst ? gmtOffset(cityName)+1 : gmtOffset(cityName);
    const now = new Intl.DateTimeFormat(locale ?? setLocale,  { dateStyle: "long",timeStyle: "long" }).format(currentDate)
    const diffTimezone = dst ? timezoneOffset - offset-1 : timezoneOffset - offset;

    const tzCode = offset > 0 ? ianaTzCodeEast[offset as keyof typeof ianaTzCodeEast] : ianaTzCodeWest[-offset as keyof typeof ianaTzCodeWest]
    const compareDate = currentDate.setHours(currentDate.getHours());
    const compared = new Intl.DateTimeFormat(locale ?? setLocale,  { dateStyle: "long",timeStyle: "long", timeZone: tzCode }).format(compareDate)

    return junctionFormat(replaceFormat(locale ?? setLocale,diffTimezone), [Math.abs(diffTimezone), cityName, now, compared]);
  }
}

export function tzCompareTime(date:string, city:string,locale?:string){
  if(date){
    const initDate = new Date(date);
    const offset = tzOffset(date);
    const currentDate = new Date();
    const timezoneOffset = (currentDate.getTimezoneOffset()/-60);
    const cityoffset =  gmtOffset(city);
    let totalOffset;
    if(offset){
      totalOffset = timezoneOffset - offset;
    }
    if(city && offset){
      totalOffset = cityoffset - offset;
      const tzCode = cityoffset > 0 ? ianaTzCodeEast[cityoffset as keyof typeof ianaTzCodeEast] : ianaTzCodeWest[-cityoffset as keyof typeof ianaTzCodeWest];
      const compared = new Intl.DateTimeFormat(setLocale,  { dateStyle: "long",timeStyle: "long", timeZone: tzCode }).format(initDate)
      return junctionFormat(replaceFormatInput(locale ?? setLocale,totalOffset), [Math.abs(totalOffset), date, city,  compared]);
    }
    
    return date;
  }
  return ""
}