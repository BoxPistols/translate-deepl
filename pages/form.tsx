// Next
import Head from 'next/head'
import Link from 'next/link'
// MUI
import { Button } from '@mui/material'

// components
import styles from '@/styles/Home.module.css'
// ReactHook
import ReactHookForm from '@/components/ReactHookForm'

export default function Form() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Form</h1>
      <ReactHookForm />
      <Link href="/" passHref>
        <Button variant="outlined">Home</Button>
      </Link>
    </div>
  )
}
