import React from 'react';
import Cabecalho from './Cabeçalho';
import Rodape  from './rodape';
import Corpo from './corpo';

import styles from './Corpo.module.css';

function Home() {
    return (
        <body className={styles.body}>
            <Cabecalho />
            <Corpo />
            <Rodape />
            {/* Conteúdo do corpo */}
        </body>
    );
}

export default Home;