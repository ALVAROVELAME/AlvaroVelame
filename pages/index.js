// pages/index.js
import Head from './head/index';
import Cabecalho from './cabeçalho/index';
import ConteudoPrincipal from './conteudo Principal/index';
import BarraLateral from './barra lateral/index';
import Rodape from './rodape/index';
import styles from './container.module.css';


function HomePage() {
  return (
    <div>
      <Head>
        <title>Seu Título Aqui</title>
        <meta name="description" content="Sua descrição aqui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cabecalho />

      <div className="container">
        
        <ConteudoPrincipal />
      </div>

      <Rodape />
    </div>
  );
}

export default HomePage;
