import React from 'react';
import AppRouter from './AppRouter'
import './App.scss';

function App() {
  console.log(
    'Skapad av:',
    '\n######',
    '\n#',
    '\n###',
    '\n#',
    '\n#ireborn'
  )
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
