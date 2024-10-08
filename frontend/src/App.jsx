//import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Login from './views/auth/login'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
