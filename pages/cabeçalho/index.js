import React from 'react';
import styles from './cabecalho.module.css';

function Cabecalho() {
  return (
  <>
    <header className={styles.container}>
      <h1 id={styles.titulo}>Alvaro Velame</h1>
      <nav>
        <ul className={styles.menus}>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Deixe um Orçamento</a></li>
        </ul>
      </nav>
    </header>
    </>
    
  );
}

export default Cabecalho;
