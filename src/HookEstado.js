import React, { useState } from 'react';

function HookEstado() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>La temperatura es de  {count} °C</p>
      <button onClick={() => setCount(count + 1)}>
      Subir temperatura
      </button>
      <button onClick={() => setCount(count - 1)}>
      Bajar temperatura
      </button>
    </div>
  );
}

export default HookEstado;