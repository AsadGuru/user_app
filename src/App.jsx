import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import UserList from './components/UserList'
import EditUser from './components/EditUser'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
