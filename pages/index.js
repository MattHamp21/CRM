import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import LoginPage from '@/components/LoginForm'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <LoginPage />
        <Link href="/SignUp">Sign Up</Link><br/>
      </main>
    </>
  )
}
