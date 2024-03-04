// componentes/Rodapé/Rodapé.js

import styles from './index.module.css';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
    </footer>
  );
}
