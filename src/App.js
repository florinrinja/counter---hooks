import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);

  return (
    <div>
      <p>Le compteur est  à : {isNaN(parseInt(count + start)) ? 0 : parseInt(count + start)}</p>
      <label><span>Le compteur va demarrer a:{' '}</span>
        <input type="number" onChange={(e) => { setStart(parseInt(e.target.value)) }} />
      </label>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default App;
