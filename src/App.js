// import React from 'react';
//
// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   );
// }
//
// export default App;


import React, { useState } from "react";
import { Square } from "./components/Square/Square";

function App() {
  const [colors, setColor] = useState(['red', 'blue'])
  function hundlerClick() {
    if (colors[0] === 'red') {
      setColor(['blue', 'red'])
    } else {
      setColor(['red', 'blue'])
    }
  }
  return (
      <div className="App">
        <Square onClickColor={hundlerClick} color={colors[0]}/>
        <Square onClickColor={hundlerClick} color={colors[1]}/>
      </div>
  );
}

export default App;