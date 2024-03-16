import React from 'react';
import styles from './index.module.css'; // Importa o módulo CSS

export default function ConteudoPrincipal() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h2>Sobre Mim</h2>
        <p>
          Olá! Sou Álvaro Velame, um entusiasta do desenvolvimento de software com experiência em Java, JavaScript e Python. Além disso, tenho expertise em automações e scraping, o que me permite simplificar processos e extrair informações valiosas da web.
        </p>
        <a href="https://www.seu-link.com">veja o Projeto</a>
        <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="Imagem" />
      </div>

      <div className={styles.column}>
        <h2>Serviços Oferecidos</h2>
        <ul>
          <li>Desenvolvimento de Aplicações Web e Desktop em Java, JavaScript e Python</li>
          <li>Automações e Scraping para otimização de processos e coleta de dados na web</li>
          <li>Consultoria em Desenvolvimento de Software</li>
        </ul>
        <a href="https://www.seu-link.com">Veja o projeto</a>
        <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="Imagem" />
      </div>
    </div>
  );
};
