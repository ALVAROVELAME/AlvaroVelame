// componentes/ConteúdoPrincipal/ConteúdoPrincipal.js

import styles from './index.module.css';

export default function ConteudoPrincipal() {
  return (
    <div className={styles.conteudoPrincipal}>
      <h2>Conteúdo Principal</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
        nec tellus sed augue semper porta. Mauris massa.
      </p>
    </div>
  );
}
