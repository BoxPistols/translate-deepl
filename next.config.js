/** @type {import('next').NextConfig} */
// TODO: 必要？　↓
const nextConfig = {
  reactStrictMode: true,
}
// module.exports = nextConfig

const nextTranslate = require('next-translate')
// module.exports = nextTranslate()
const path = require('path')

module.exports = [
  nextTranslate(),
  nextConfig,
  {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  },
]
