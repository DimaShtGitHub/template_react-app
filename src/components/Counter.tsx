import { useEffect, useState } from "react"
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        return setCount(count => count + 1)
    }

    
  return (
    <>
        <h1>{count}</h1>
        <button onClick={increment}>
            increment
        </button>
    </>
  )  
}