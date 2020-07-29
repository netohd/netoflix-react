import React from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';
import Footer from './components/Footer';
import Highlight from './components/Highlight';
import Link from './components/Link';

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Button>Novo vídeo</Button>
      </Header>
      <Footer>
        <Logo />
        <p>Site feito por <Highlight><Link href="http://www.be.net/antnioalmeida5">Antônio Almeida</Link></Highlight></p>
      </Footer>
    </>
  );
}

export default App;
