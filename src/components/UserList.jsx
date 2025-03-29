import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`)
        setUsers(response.data.data)
      } catch (err) {
        console.error('Error fetching users:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [page])

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`)
      setUsers(users.filter((user) => user.id !== id))
    } catch (err) {
      console.error('Error deleting user:', err)
    }
  }

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <img src={user.avatar} alt={user.first_name} />
                <h3>{user.first_name} {user.last_name}</h3>
                <Link to={`/edit/${user.id}`}>Edit</Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        </div>
      )}
    </div>
  )
}

export default UserList
