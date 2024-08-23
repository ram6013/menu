import './App.css';
import Button from './componentes/Button';
import React, { useState, useRef, useEffect } from 'react';
import Bebidas from './componentes/Bebidas';
import Entrantes from './componentes/Entrantes';
import Hamburguesas from './componentes/Hamburguesas';
import Carnes from './componentes/Carnes';
import Postres from './componentes/Postres';

function App() {
  const [activeTab, setActiveTab] = useState("bebidas");
  const buttonRef = useRef("null");

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-black overflow-auto">
      <header className="flex flex-col md:flex-row justify-between bg-black p-4">
        <h1 className="flex items-center text-white text-4xl md:text-6xl font-bold">
          <img src='hambrguesa.webp' alt='Icono hamburguesa' className='h-12 md:h-16 w-12 md:w-13' />
          RGBurger
        </h1>
        <button className='flex items-center text-white text-lg md:text-2xl hover:text-blue-300'>
          <img src='icono.png' alt='Icono' className='w-8 md:w-11 h-6 md:h-9' />
          Inicio de sesión
        </button>
      </header>
      <div className='flex flex-col md:flex-row justify-evenly bg-white p-4'>
        <Button onClick={() => handleButtonClick("bebidas")} ref={buttonRef}>Bebidas</Button>
        <Button onClick={() => handleButtonClick("entrantes")}>Entrantes</Button>
        <Button onClick={() => handleButtonClick("hamburguesas")}>Hamburguesas</Button>
        <Button onClick={() => handleButtonClick("carnes")}>Carnes</Button>
        <Button onClick={() => handleButtonClick("postres")}>Postres</Button>
      </div>
      <div className='flex flex-col p-4 space-y-4'>
        {activeTab === "bebidas"  && <Bebidas />}
        {activeTab === "entrantes" && <Entrantes />}
        {activeTab === "hamburguesas" && <Hamburguesas />}
        {activeTab === "carnes" && <Carnes />}
        {activeTab === "postres" && <Postres />}

      </div>
    </div>
  );
}

export default App;
