import React from "react";
import Option from "./Option";

const Carnes = () => (
  <div className='flex flex-col p-4 space-y-4'>
    <Option
      Nombre={"Entrecot a la Parrilla"}
      Informacion={"Entrecot de res cocido a la parrilla, servido con papas asadas y salsa de chimichurri."}
      Precio={"18.00"}
    />
    <Option
      Nombre={"Costillas BBQ"}
      Informacion={"Costillas de cerdo marinadas en salsa BBQ, acompañadas de ensalada de col y pan de maíz."}
      Precio={"20.00"}
    />
    <Option
      Nombre={"Filete Mignon"}
      Informacion={"Filete de res tierno y jugoso, servido con puré de papas y espárragos al vapor."}
      Precio={"22.00"}
    />
    <Option
      Nombre={"Bife de Chorizo"}
      Informacion={"Corte de carne de res a la parrilla, acompañado de papas fritas y verduras asadas."}
      Precio={"19.00"}
    />
    <Option
      Nombre={"Hamburguesa de Carne de Cordero"}
      Informacion={"Hamburguesa de carne de cordero, con queso feta, menta fresca y salsa tzatziki en pan de pita."}
      Precio={"16.00"}
    />
  </div>
);

export default Carnes;
