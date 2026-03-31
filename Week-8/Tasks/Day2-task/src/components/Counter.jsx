import { useState } from "react"
import '../App.css'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
      <div className="counter-container">
          <h1 style={{color:'white'}}>COUNTER APP</h1>
          <h1 style={{color:'white'}} className="count">{count}</h1>
          <div className="btn-group">
              <button onClick={()=>setCount(count+1)}>Increase</button>  {/* if we call the function directly, it will execute immediately during rendering. So we pass a function reference or arrow function so it runs only when the event happens. */}
              <button disabled={count===0} onClick={()=>setCount(count-1)}>Decrease</button>
              <button onClick={() => setCount(0)}>Reset</button>
          </div>
      </div>
  )
}

export default Counter