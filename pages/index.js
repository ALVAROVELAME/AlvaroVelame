// pages/index.js
import Head from './head/index';
import Cabeçalho from './cabeçalho/index';
import ConteúdoPrincipal from './conteudo Principal/index';
import BarraLateral from './barra lateral/index';
import Rodapé from './rodape/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Seu Título Aqui</title>
        <meta name="description" content="Sua descrição aqui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cabeçalho />

      <div className="container">
        <BarraLateral />
        <ConteúdoPrincipal />
      </div>

      <Rodapé />
    </div>
  );
}
