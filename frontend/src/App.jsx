//import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Login from './views/auth/login'
import Register from './views/auth/register'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
