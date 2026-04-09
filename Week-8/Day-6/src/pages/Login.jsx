import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()
  const [data, setData] = useState({ email: "", password: "" })
  const [error, setError] = useState({ emailError: "", passwordError: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleForm = (e) => {
    e.preventDefault()

    const newError = {
      emailError: '',
      passwordError: ''
    }

    let valid = true

    if (!data.email) {
      newError.emailError = 'Enter your Email'
      valid = false
    }

    if (!data.password) {
      newError.passwordError = 'Enter your password'
      valid = false
    }

    if (!valid) {
      setError(newError)
      return
    }

    if (data.email !== 'johndavid01@gmail.com') {
      setError({
        emailError: 'Email not found',
        passwordError: ''
      })
      return
    }

    if (data.password !== '12345') {
      setError({
        emailError: '',
        passwordError: 'Incorrect Password'
      })
      return
    }

    localStorage.setItem('isAuth', 'true')
    navigate('/products')
  }

  return (
    <div className="bg-black flex justify-center items-center h-screen px-4">
      <form onSubmit={handleForm} className="border border-green-500 py-14 px-10 rounded-3xl mt-22 w-110 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-500">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className="w-full border border-gray-700 bg-black text-white p-4 rounded-2xl focus:outline-none focus:border-green-500"
        />

        {error.emailError && (
          <p className="text-red-400 text-sm mt-1">
            {error.emailError}
          </p>
        )}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          className="w-full border border-gray-700 bg-black text-white p-4 rounded-2xl mt-4 focus:outline-none focus:border-green-500"
        />

        {error.passwordError && (
          <p className="text-red-400 text-sm mt-1">
            {error.passwordError}
          </p>
        )}

        <button className="w-full bg-green-500 text-black py-4 mt-6 rounded-2xl font-semibold hover:bg-green-600 transition">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login