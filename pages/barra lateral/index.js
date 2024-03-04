// componentes/BarraLateral/BarraLateral.js

import styles from './index.module.css';

export default function BarraLateral() {
  return (
    <aside className={styles.barraLateral}>
      <h2>Servisos</h2>
      <ul>
        <li>Automações</li>
        <li>web Scraping</li>
        <li>Desenvolvimento Web</li>
        {/* Adicione mais links conforme necessário */}
      </ul>
    </aside>
  );
}
