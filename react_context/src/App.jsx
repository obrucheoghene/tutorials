/** 
 * Provide that context from the component
 * that specifies the data 
 */
import { useState,  } from 'react'
import { SizeContext } from "./SizeContext"
import Box from "./Box";

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const boxSize = isLarge ? 400 : 200;
  return (
    
    <div className="app">
      <label>
        <input type="checkbox" checked={isLarge} 
        onChange={() => setIsLarge((prev) => !prev)} />
        Change Size
      </label>
      <SizeContext.Provider value={boxSize} >
        <Box />
      </SizeContext.Provider>
    </div>

  )
}

export default App
