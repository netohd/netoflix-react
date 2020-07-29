import React from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Header>
        <Logo/>
        <Button>Novo vídeo</Button>
        </Header> 
    </div>
  );
}

export default App;
