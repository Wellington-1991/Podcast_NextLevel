
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss'; // importa o css da pasta  styles.modules

export function Header() {

    // formatação de data para o formato em Português!
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })

    //o span recebe a data por paramentro!
    return (
        <header className={styles.headerContainer}>

            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para você ouvir, sempre!</p>

            <span>{currentDate}</span>

        </header>
    )
}