import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`)
        const user = response.data.data
        setFirstName(user.first_name)
        setLastName(user.last_name)
        setEmail(user.email)
      } catch {
        setError('Failed to fetch user data')
      }
    }

    fetchUser()
  }, [id])

  const handleSave = async () => {
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, {
        first_name: firstName,
        last_name: lastName,
        email,
      })
      navigate('/users')
    } catch {
      setError('Error updating user')
    }
  }

  return (
    <div>
      <h3>Edit User</h3>
      {error && <p>{error}</p>}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default EditUser
