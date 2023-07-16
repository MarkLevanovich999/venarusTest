import React from 'react';
import Header from "./header/header";
import Body from "./body/body";
import Bottom from "./bottom/bottom";

function App() {

  const anchor = ['header','about','opinion','rec','where'];

  return (
    <div className="App">
      <Header anchor={anchor}/>
      <Body anchor={anchor}/>
      <Bottom/>
    </div>
  );
}

export default App;
