interface junctionDict {
  [Key: string]: junctionItem;
}

type junctionItem = {
  'prefix': string,'prefix_date'?: string,
  'ahead': string,
  'end': string,
  'same': string,
  'behind': string
}

export const conjunction:junctionDict = {
  'en': {
    'end': ', {2}, {3}',
    'prefix': 'Local time is','prefix_date': '{2} time is',
    'same':' the same as {1}',
    'ahead':' {0} hours ahead of {1}',
    'behind':' {0} hours behind of {1}',
  },
  'zh': {
    'end': ', {2}, {3}',
    'prefix': '当地时间与','prefix_date': '{2} 时间与',
    'same':' {1}时间 相同',
    'ahead':' {1}时间相比 快{0}小时',
    'behind':' {1}时间相比 慢{0}小时',
  },
  'fr':{
    'end': ', {2}, {3}',
    'prefix': "L’heure locale est ",'prefix_date': "L’heure {2} est ",
    'same':" la même que l'heure de l'{1}",
    'ahead':" {0} heures en avance sur l'heure de l'{1}",
    'behind':" en retard de {0} heures sur l’heure de l’{1}",
  },
  'es': {
    'end': ', {2}, {3}',
    'prefix': 'La hora local ','prefix_date': "La hora {2} ",
    'same':'es la misma que la hora de {1}',
    'ahead':'está {0} horas por delante de la hora de {1}',
    'behind':'está {0} horas por detrás de la hora de {1}',
  }
}