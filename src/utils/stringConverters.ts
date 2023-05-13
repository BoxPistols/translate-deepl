// 文字列をキャピタライズする関数 capitalize を定義する　capitalizeとは、先頭の文字を大文字にすること
export const capitalize = (str: string) => {
  if (typeof str !== 'string' || !str) return str
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// 文字列をキャメルケースに変換する関数 toLowerCamelCase を定義する
export const toLowerCamelCase = (str: string) => {
  if (typeof str !== 'string' || !str) return str
  const words = str.replace(/[\s-_/\\]+/g, ' ').split(' ')
  const validWords = words.filter((word) => word && word.length > 0)
  const camelCaseWords = validWords.map((word, index) => {
    const firstLetter =
      index === 0 ? word[0].toLowerCase() : word[0].toUpperCase()
    const restOfWord = word.slice(1).toLowerCase()
    return firstLetter + restOfWord
  })
  const lowerCamelCaseStr = camelCaseWords.join('')
  return lowerCamelCaseStr
}

// 文字列をUpperCamelCaseに変換する関数を定義する
export const toUpperCamelCase = (str: string) => {
  if (typeof str !== 'string' || !str) return str
  const words = str.replace(/[\s-_/\\]+/g, ' ').split(' ')
  const validWords = words.filter((word) => word && word.length > 0)
  const camelCaseWords = validWords.map((word) => {
    const firstLetter = word[0].toUpperCase()
    const restOfWord = word.slice(1).toLowerCase()
    return firstLetter + restOfWord
  })
  const upperCamelCaseStr = camelCaseWords.join('')
  return upperCamelCaseStr
}

// 文字列をすべて小文字に変換する関数 toAllLowerCase を定義する
export const toAllLowerCase = (str: string) => {
  if (typeof str !== 'string' || !str) return str
  return str.toLowerCase()
}

// 文字列をケバブケースに変換する関数を定義する
export const toLowerKebabCase = (str: string) => {
  if (typeof str !== 'string' || !str) return str
  return str.replace(/\s+/g, '-')
}

// 文字列をスネークケースに変換する関数を定義する
export const toLowerSnakeCase = (str: string) => {
  if (typeof str !== 'string' || !str) return str
  return str.replace(/\s+/g, '_')
}
