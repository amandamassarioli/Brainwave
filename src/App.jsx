import React from 'react';
import Header from './components/Header';
import ButtonGradient from './assets/svg/ButtonGradient';
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <Button className="mt-10" href="#login">
        Something
      </Button>
      <ButtonGradient />
    </>
  );
}

export default App; 