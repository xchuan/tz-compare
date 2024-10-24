import { conjunction } from './translation'

export function junctionFormat(str:string,args:any) {
  if (args?.length == 0) return str;
  if (args === undefined) return str;
  const param = args;
  var s = str;
  if (typeof(param) == 'object') {
      for (var key in param) s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
      return s;
  }
  return s;
}

export function replaceFormat(locale:string,diff:number) {
  const language = locale.split('-')[0];
  const dict = conjunction[language as keyof typeof conjunction];
  if(diff==0)return [dict['prefix'],dict['same'],dict['end'].replace(', {3}','')].join('');
  if(diff<0)return [dict['prefix'],dict['behind'],dict['end']].join('');
  return [dict['prefix'],dict['ahead'],dict['end']].join('');
}

export function replaceFormatInput(locale:string,diff:number) {
  const language = locale.split('-')[0];
  const dict = conjunction[language as keyof typeof conjunction];
  if(diff==0)return [dict['prefix_date'],dict['same']].join('');
  if(diff<0)return [dict['prefix_date'],dict['behind'],dict['end'].replace(', {2}','')].join('');
  return [dict['prefix_date'],dict['ahead'],dict['end'].replace(', {2}','')].join('');
}