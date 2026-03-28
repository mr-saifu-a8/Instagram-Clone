import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Home from "./features/auth/pages/Home"

const AppRoutes = () => {
  return (
    <div>
      
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AppRoutes