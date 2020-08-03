import React from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';
import Footer from './components/Footer';
import Highlight from './components/Highlight';
import Link from './components/Link';
import Tag from './components/Tag';
import Banner from './components/Banner';
import Title from './components/Title';
import Description from './components/Description';

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Button>Novo vídeo</Button>
      </Header>

      <Banner>
        <Tag>FrontEnd</Tag>
        <Title>Titulo do video</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce nisi ligula, fermentum sed quam viverra, aliquet porttitor augue. 
          Vivamus posuere pretium finibus. Etiam at tempor velit.</Description>
      </Banner>

      <Footer>
        <Logo />
        <p>Site feito por <Highlight><Link href="http://www.be.net/antnioalmeida5">Antônio Almeida</Link></Highlight></p>
      </Footer>
    </>
  );
}

export default App;
