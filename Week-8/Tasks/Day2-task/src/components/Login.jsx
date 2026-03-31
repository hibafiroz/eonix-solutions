import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword]=useState("")
    function onSubmit(e) {
        e.preventDefault()
        alert('Email: '+ email + ' Password: '+ password)
    }
  return (
      <div className="login-container">
          <form onSubmit={onSubmit}>
              <h1 style={{ color: "white" }}>Login Form</h1>
              <div className="login-input">
                  <label htmlFor="email" style={{color:'white', marginRight:'220px'}}>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="password" style={{color:'white', marginRight:'200px'}}>Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button type="submit">Login</button>
              </div>
          </form>
    </div>
  )
}

export default Login
