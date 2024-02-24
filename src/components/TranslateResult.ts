export const TranslateResult = () => [
  {
    id: 'capitalize',
    title: 'Capitalize',
    subtitle: '先頭（最初の1文字）を大文字、以降を小文字',
    transformType: 'capitalize',
  },
  {
    id: 'lowerCamel',
    title: 'lowerCamel',
    subtitle: '先頭小文字のcamelCase',
    transformType: 'lowerCamelCase',
  },
  {
    id: 'allUpperCamel',
    title: 'UpperCamel',
    subtitle: '単語ごとの先頭大文字',
    transformType: 'upperCamelCase',
    noSymbols: true,
  },
  {
    id: 'allLower',
    title: 'lower',
    subtitle: '全て小文字',
    transformType: 'allLowerCase',
    noSymbols: true,
  },
  {
    id: 'allLowerKebab',
    title: 'lower-kebab',
    subtitle: '小文字のケバブ',
    transformType: 'kebabCase',
  },
  {
    id: 'allLowerSnake',
    title: 'lower_snake',
    subtitle: '小文字のスネーク',
    transformType: 'snakeCase',
  },
]
