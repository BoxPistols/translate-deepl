import { render, screen } from '@testing-library/react'
import Home from 'pages/index'
// for with language test
import langJA from '../../locales/ja/lang.json'
import langEN from '../../locales/en/lang.json'
import langKO from '../../locales/ko/lang.json'
import I18nProvider from 'next-translate/I18nProvider'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(
      <>
        {/* JA */}
        <I18nProvider lang="ja" namespaces={{ lang: langJA }}>
          <Home />
        </I18nProvider>

        {/* EN */}
        <I18nProvider lang="en" namespaces={{ lang: langEN }}>
          <Home />
        </I18nProvider>

        {/* KOREA */}
        <I18nProvider lang="ko" namespaces={{ lang: langKO }}>
          <Home />
        </I18nProvider>
      </>,
    )
    expect(container).toMatchSnapshot()
  })
})
