  import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
  } from 'react-router-dom'
  
  
  import Login from './pages/Login'
  import SinUp from './pages/SinUp'
  import Home from './pages/Home'
  import RegisterBooks from './pages/RegisterBooks'
  import Configurations from './pages/Configurations'
  import Help from './pages/Help'
  
  function ProtectedRoutes ({ redirectTo }) {
    const token = localStorage.getItem('users');
    return token ? <Outlet /> : <Navigate to={redirectTo } /> 
  }
  
  export default function MyRoutes () {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sinup" element={<SinUp />} />
          <Route path="/registerbooks" element={<RegisterBooks />} />
          <Route path="/configurations" element={<Configurations />} />
          <Route path="/help" element={<Help />} />
          <Route element={<ProtectedRoutes redirectTo='/' />}>
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/registerBooks" element={<RegisterBooks />} /> */}
        
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

