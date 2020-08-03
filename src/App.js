import React from 'react';
import { Header, Wrapper } from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';
import Footer from './components/Footer';
import Highlight from './components/Highlight';
import Link from './components/Link';
import Tag from './components/Tag';
import { Banner, Text } from './components/Banner';
import Title from './components/Title';
import Description from './components/Description';
import ThumbVideo from './components/Thumb';
import thumbimg from './assets/img/thumb-img.png'
import channelimg from './assets/img/channel-img.png'

function App() {
  return (
    <>
      <Header>
        <Wrapper>
        <Logo />
        <Button>Novo vídeo</Button>
      </Wrapper>
      </Header>

      <Banner>
        <Text>
        <Tag>FrontEnd</Tag>
        <Title>As Skills de um Dev Front-End</Title>
        <Description>Vídeo com algumas das tecnologias que atualmente 
          são consideradas importantes para quem quer entrar no 
          mercado do Desenvolvimento Front-End.</Description>
        </Text>
        <ThumbVideo 
          src={thumbimg} 
          alt="Thumb do vídeo sobre front"
          avatar={channelimg}
          channelName="Código Fonte TV"
          >
        </ThumbVideo>
      </Banner>

      <Footer>
        <Logo />
        <p>Site feito por <Highlight><Link href="http://www.be.net/antnioalmeida5">Antônio Almeida</Link></Highlight></p>
      </Footer>
    </>
  );
}

export default App;
