/**
 *  Use that context from the component that needs the data. 
 */
import {useContext} from 'react'
import { SizeContext } from "./SizeContext"

const Box = () => {
  const boxSize = useContext(SizeContext);
  return (
    <div style={{
       height: boxSize,
       width: boxSize, 
       backgroundColor: 'blue', 
       margin: 'auto'
      }}></div>
  )
}

export default Box