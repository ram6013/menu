import React from "react";
import Option from "./Option";
const Bebidas = () =>(
    <div className=' flex flex-col p-4 space-y-4'>
        <Option Nombre={"Cocacola"} Informacion={"Cocacola fría en vaso de 200ml"} Precio={"2"}/>
        <Option Nombre={"Agua"} Informacion={"Agua fría en jarra de 1L"} Precio={"1.5"} />
        <Option Nombre={"Fanta de limón"} Informacion={"Fanta de naranja"} Precio={"2"}></Option>
        <Option Nombre={"Fanta de naranja"} Informacion={"Fanta de naranja"} Precio={"2"}></Option>
        <Option Nombre={"Aquarius"} Informacion={"Fanta de naranja"} Precio={"2"}></Option>
        <Option Nombre={"Vino"} Informacion={"Fanta de naranja"} Precio={"3"}></Option>
        <Option Nombre={"Copas"} Informacion={"Fanta de naranja"} Precio={"4.5"}></Option>
  </div>
)
export default Bebidas