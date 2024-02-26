import Head from 'next/head'
import { Box, Container } from '@mui/material'
import { Translate } from '@/components/Translate'
import styles from '../src/styles/Home.module.css'
import { TitleSet } from '@/components/TitleSet'
import React from 'react'
import ToggleTheme from './ToggleTheme'

export default function Home({ toggleTheme }) {
  return (
    <>
      <Head>
        <title>Translate for i18n Deepl</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ToggleTheme toggleTheme={toggleTheme} />
      </header>

      <Container maxWidth="xl">
        <div className={styles.container}>
          <Box mt={1} display={{ xs: 'none', md: 'flex' }}>
            <TitleSet
              component="h1"
              variant="h2"
              // headingText="Deep Translate for i18n & json"
              headingText=""
              subtitleText="日本語から英語に翻訳と同時に、日英セットで各json形式で書き出されます"
            />
          </Box>
          <main className={styles.main}>
            <Box my={1}>
              <Translate />
            </Box>
          </main>
        </div>
      </Container>
    </>
  )
}
