import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',  // Change this email
        password: 'cityslicka'        // Change this password
      })
      localStorage.setItem('token', response.data.token)
      navigate('/users')
    } catch {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
