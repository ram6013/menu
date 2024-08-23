import React from "react";
import Option from "./Option";
const Hamburguesas = () => (
    <div className=' flex flex-col p-4 space-y-4'>
        <Option Nombre={"Hamburguesa Clásica"} Informacion={"Carne de res, lechuga, tomate, cebolla, queso cheddar, y mayonesa en pan de sésamo."} Precio={"8.5"} />
        <Option Nombre={"Hamburguesa BBQ Bacon"} Informacion={"Carne de res, bacon crujiente, cebolla caramelizada, queso cheddar, salsa BBQ, y lechuga en pan de brioche."} Precio={"10.00"} />
        <Option Nombre={"Hamburguesa Vegana"} Informacion={"Hamburguesa de garbanzos y especias, aguacate, tomate, cebolla roja, y mayonesa vegana en pan integral."} Precio={"10.00"}></Option>
        <Option Nombre={"Hamburguesa con Champiñones y Suizo"} Informacion={"Carne de res, champiñones salteados, queso suizo, cebolla caramelizada, y mostaza Dijon en pan de cebolla."} Precio={"9.50"}></Option>
        <Option Nombre={"Hamburguesa Deluxe"} Informacion={"Carne de res, queso cheddar, bacon, cebolla caramelizada, lechuga, tomate, y mayonesa especial en pan de brioche."} Precio={"11.00"}></Option>
        <Option Nombre={"Hamburguesa con Aros de Cebolla"} Informacion={"Carne de res, aros de cebolla fritos, queso cheddar, lechuga, y ketchup en pan de brioche."} Precio={"10.50"}></Option>

    </div>
)
export default Hamburguesas