// 文字列を指定した形式に変換する
// @param {string} str - 文字列
// @param {string} type - 変換形式

export type TextTransformType =
  | 'capitalize'
  | 'lowerCamelCase'
  | 'upperCamelCase'
  | 'upperCamelSnake'
  | 'allLowerCase'
  | 'kebabCase'
  | 'snakeCase'

export const transformText = (str: string, type: TextTransformType): string => {
  if (typeof str !== 'string' || !str) return str // 空文字列の場合はそのまま返す

  switch (type) {
    case 'capitalize':
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() // 先頭のみ大文字にする

    case 'lowerCamelCase':
      return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
        if (+match === 0) return ''
        return index === 0 ? match.toLowerCase() : match.toUpperCase() // 先頭のみ小文字にする
      })

    case 'upperCamelCase':
      return str.replace(
        /(?:^\w|[A-Z]|\b\w|\s+)/g,
        (match) =>
          match.charAt(0).toUpperCase() + match.substring(1).toLowerCase(),
      )

    case 'upperCamelSnake':
      return str.replace(
        /(?:^\w|[A-Z]|\b\w|\s+)/g,
        (match) => match.charAt(0).toUpperCase().replace(/\s+/g, '_'), // 単語ごとの先頭のみ大文字にする + スネークケース
      )

    case 'allLowerCase':
      return str.toLowerCase() // 全て小文字にする

    case 'kebabCase':
      return str.replace(/\s+/g, '-').toLowerCase() // ケバブケース

    case 'snakeCase':
      return str.replace(/\s+/g, '_').toLowerCase() // スネークケース

    default:
      return str // どれにも当てはまらない場合はそのまま返す
  }
}

transformText('Hello World', 'capitalize') // Hello world
transformText('Hello World', 'lowerCamelCase') // helloWorld
transformText('Hello World', 'upperCamelCase') // HelloWorld
transformText('Hello World', 'upperCamelSnake') // Hello_World
transformText('Hello World', 'allLowerCase') // hello world
transformText('Hello World', 'kebabCase') // hello-world
transformText('Hello World', 'snakeCase') // hello_world