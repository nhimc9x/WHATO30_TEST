import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from '~/layouts/MainLayout/MainLayout'
import { Home } from '~/pages/Home/Home'
import { Login } from '~/pages/Login/Login'
import { Register } from '~/pages/Register/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
