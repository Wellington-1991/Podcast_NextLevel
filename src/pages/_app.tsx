import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'

import styles from '../styles/app.module.scss'

// toda parte da aplicação vai ser exibida aqui no APP.
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        < Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
