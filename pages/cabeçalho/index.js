// componentes/Cabeçalho/Cabecalho.js

import styles from './index.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/java-coffee-cup-logo--v2.png" alt="java-coffee-cup-logo--v2" />
      </div>
      
      <nav className={styles.navlinks}>
        <ul>
          <li><button className={styles.butaoTema}>Café Claro</button></li>
          <li><a href="/">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
