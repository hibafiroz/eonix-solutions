import {useState} from 'react'

const Toggle = () => {
    const [display, setDisplay] = useState(false) 
    return (
      <div className='toggle-container'>
            <h1 style={{ color: 'white' }}> Toggle Practise</h1>
             <button className='toggle-btn' onClick={()=>setDisplay(!display)}>Toggle</button>
            {display?<p className="toggle-text">Hello Welcome</p>:null}
      </div>
  )
}

export default Toggle