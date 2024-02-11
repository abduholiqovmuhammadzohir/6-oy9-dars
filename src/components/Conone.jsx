import React, { useContext } from 'react'
import { UseContext } from '../App'
import Context from './Context'

function Conone() {
    const user = useContext(UseContext)
    console.log(user);
  return (
    <div>
        <Context></Context>
    </div>
  )
}

export default Conone