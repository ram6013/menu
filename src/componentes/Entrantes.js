import React from "react";
import Option from "./Option";
const Entrantes =()=>(
    <div className='flex flex-col p-4 space-y-4'>
        <Option Nombre={"Patatas Bravas"} Informacion={"..."} Precio={"4"}/>
        <Option Nombre={"Ensalada"} Informacion={"Ensalada"} Precio={"2.5"} />
        <Option Nombre={"Pulpo a la gallega"} Informacion={"Pulpo a la gallega"} Precio={"9"}></Option>
        <Option Nombre={"Aros de cebolla"} Informacion={"Aros de cebolla"} Precio={"3"}></Option>
        <Option Nombre={"Sardinas"} Informacion={"Sardinas"} Precio={"6"}></Option>
        <Option Nombre={"Alcachofas"} Informacion={"Alcachofas"} Precio={"4"}></Option>
        <Option Nombre={"Gazpacho"} Informacion={"Gazpacho"} Precio={"4.5"}></Option>
  </div>
)
export default Entrantes