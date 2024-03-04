import React from 'react';
import styles from './index.module.css';

function Rodape() {
    return (
        <div className={styles.rodape}>
        <footer >
    <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
    <nav>
      <ul>
        <li><a href="#">Termos de Serviço</a></li>
        <li><a href="#">Política de Privacidade</a></li>
      </ul>
    </nav>
</footer>
</div>

    );
}

export default Rodape;