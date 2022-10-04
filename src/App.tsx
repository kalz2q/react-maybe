import React from 'react';
import './App.css';

function App() {
  const a = {
    b: {
      c: "fp"
    }
  };

  const appendString = (obj: object) =>
    obj.b.c + " is great";

  const result = appendString(a);

  console.log(result);


  return (
    <div className="App">
    </div>
  );
}

export default App;
