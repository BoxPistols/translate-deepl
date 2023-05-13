export type TextTransformType =
  | 'capitalize'
  | 'lowerCamelCase'
  | 'upperCamelCase'
  | 'upperCamelSnake'
  | 'allLowerCase'
  | 'kebabCase'
  | 'snakeCase'

export const transformText = (str: string, type: TextTransformType): string => {
  if (typeof str !== 'string' || !str) return str

  switch (type) {
    case 'capitalize':
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

    case 'lowerCamelCase':
      return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
        if (+match === 0) return ''
        return index === 0 ? match.toLowerCase() : match.toUpperCase()
      })

    case 'upperCamelCase':
      return str.replace(
        /(?:^\w|[A-Z]|\b\w|\s+)/g,
        (match) =>
          match.charAt(0).toUpperCase() + match.substr(1).toLowerCase(),
      )

    case 'upperCamelSnake':
      return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) =>
        match.charAt(0).toUpperCase().replace(/\s+/g, '_'),
      )

    case 'allLowerCase':
      return str.toLowerCase()

    case 'kebabCase':
      return str.replace(/\s+/g, '-').toLowerCase()

    case 'snakeCase':
      return str.replace(/\s+/g, '_').toLowerCase()

    default:
      return str
  }
}
