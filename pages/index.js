import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CoplaintCard from '@/components/complaintCard'
import LoginPage from '@/components/LoginForm'
import SignupPage from '@/components/SignUp'
import CustomerList from '@/components/CustomerInfo'
import CrudCustomer from '@/components/CrudCustomer'
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
        <Link href="/Home">Home Page</Link><br/>
        <Link href="/Complaint">Complaint</Link><br/>
        <Link href="/SignUp">Sign Up</Link><br/>
      </main>
    </>
  )
}
