// componentes/Corpo/Corpo.js

import styles from './index.module.css';

export default function Corpo({ children }) {
  return (
    <div className={styles.corpo}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
}
