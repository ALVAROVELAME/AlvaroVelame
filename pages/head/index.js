// componentes/Head/Head.js

import Head from 'next/head';

export default function Cabecalho() {
  return (
    <Head>
      <title>Seu Título Aqui</title>
      <meta name="description" content="Sua descrição aqui" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
