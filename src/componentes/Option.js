import React from 'react';

const Option = ({ Nombre, Informacion, Precio }) => (
<div className="flex items-center p-4 border rounded-lg shadow-md bg-red-900 mb-4 justify-between">
  <div>
    <h1 className="text-black text-xl font-bold">{Nombre}</h1>
    <h4 className="text-white">{Informacion}</h4>
  </div>
  <div className='font-bold text-white'>
    <h2>{Precio}$</h2>
  </div>
</div>

);

export default Option;
