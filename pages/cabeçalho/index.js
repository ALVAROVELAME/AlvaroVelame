// componentes/Cabeçalho/Cabecalho.js

import styles from './index.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <h1><img width="50" height="50" src="https://img.icons8.com/ios/50/java-coffee-cup-logo--v2.png" alt="java-coffee-cup-logo--v2"/></h1>
      <p>Bem-vindo ao meu site!</p>
    </header>
  );
}
