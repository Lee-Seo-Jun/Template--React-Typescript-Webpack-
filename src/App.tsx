import * as React from "react";


function App() {
    
  interface test {
    [key:string] : number,
  }

  let test: test = {};


  return(
    <>
      <div>TEST</div>
      <div>{test["lo"]}</div>
    </>
  ) 

}

export default App;