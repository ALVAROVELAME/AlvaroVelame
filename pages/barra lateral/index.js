// componentes/BarraLateral/BarraLateral.js

import styles from './index.module.css';

export default function BarraLateral() {
  return (
    <aside className={styles.barraLateral}>
      <h2>Barra Lateral</h2>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        {/* Adicione mais links conforme necessário */}
      </ul>
    </aside>
  );
}
