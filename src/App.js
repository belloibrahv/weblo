import Login from "./component/Login"
import Register from "./component/Register"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./component/Home"
import Auth from "./component/Auth"

const App = () => {  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
          <Route path="auth" element={<Auth />}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='*' element={<div>404 Error</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App