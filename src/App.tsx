import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
function App() {
  const [bit, setbit] = React.useState(0);
  return (
    <div className="App">
      <buton onClick={()=>setbit( value: bit-1)}> - </button>
      {` ${bit} `}
      <buton onClick={()=>setbit( value: bit+1)}>+</button>
      { bit >9 && <h1>{`Za dużo! Nie klikaj już`}</h1>}
    </div>
  );
}
*/

function App() {
  const [bit, setbit] = React.useState(0);
  return (
    <div className="App">
    
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      
      <buton onClick={()=>setbit( value: bit-1)}> - </button>
      {` ${bit} `}
      <buton onClick={()=>setbit( value: bit+1)}>+</button>
      { bit >9 && <h1> {`Za dużo! Nie klikaj już`} </h1>}
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
