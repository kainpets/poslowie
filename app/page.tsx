import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Searchbar from "./Searchbar"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Searchbar />
    </main>
  )
}
