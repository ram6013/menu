import React from "react";
import Option from "./Option";

const Postres = () => (
    <div className="flex flex-col p-4 space-y-4">
    <Option 
      Nombre={"Tarta de Queso"} 
      Informacion={"Tarta de queso cremosa con una base de galleta y cobertura de frutos rojos."} 
      Precio={"7.00"}
    />
    <Option 
      Nombre={"Brownie de Chocolate"} 
      Informacion={"Brownie de chocolate intenso, servido con helado de vainilla y salsa de chocolate caliente."} 
      Precio={"6.50"}
    />
    <Option 
      Nombre={"Mousse de Limón"} 
      Informacion={"Mousse ligera de limón con una base de galleta y decorada con ralladura de limón."} 
      Precio={"6.00"}
    />
    <Option 
      Nombre={"Crème Brûlée"} 
      Informacion={"Flan de crema con una capa de azúcar caramelizada por encima."} 
      Precio={"8.00"}
    />
    <Option 
      Nombre={"Sundae de Helado"} 
      Informacion={"Helado de vainilla con sirope de chocolate, nueces y cereza."} 
      Precio={"5.50"}
    />
  </div>
);

export default Postres;
