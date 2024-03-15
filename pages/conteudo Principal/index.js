import React from 'react';
import styles from './index.module.css'; // Importa o módulo CSS

export default function ConteudoPrincipal() {
  return (
    <>
      <div className={styles.conteudoPrincipal}>
        <div>
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou Álvaro Velame, um entusiasta do desenvolvimento de software com experiência em Java, JavaScript e Python. Além disso, tenho expertise em automações e scraping, o que me permite simplificar processos e extrair informações valiosas da web.
          </p>
        </div>
        <div className={styles.imagem}>
          <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="Imagem" />
        </div>

        <div>
          <h2>Serviços Oferecidos</h2>
          <p>
            <ul>
              <li>Desenvolvimento de Aplicações Web e Desktop em Java, JavaScript e Python</li>
              <li>Automações e Scraping para otimização de processos e coleta de dados na web</li>
              <li>Consultoria em Desenvolvimento de Software</li>
            </ul>
          </p>
        </div>
        <div>
          <div className={styles.imagem}>
            <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="Imagem" />
          </div>
        </div>
        <div>
          <h2>Tecnologias</h2>
          <h6>Minhas habilidades abrangem:</h6>
          <p>
            <ul>
              <li>Linguagens de Programação: Java, JavaScript, Python</li>
              <li>Frameworks e Bibliotecas: Spring Boot, React.js, Node.js, Flask</li>
              <li>Automação e Scraping: Selenium, BeautifulSoup, Puppeteer</li>
              <li>Banco de Dados: SQL (MySQL, PostgreSQL), NoSQL (MongoDB)</li>
            </ul>
          </p>
        </div>
        <div>
          <div className={styles.imagem}>
            <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" alt="Imagem" />
          </div>
        </div>
      </div>
    </>
  );
};
