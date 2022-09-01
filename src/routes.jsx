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
  import ChangeEmail from './pages/ChangeEmail'
  import ChangePassword from './pages/ChangePassword'
  import DisableAccount from './pages/DisableAccount'
  import LoggedIn from './pages/LoggedIn'
  import MocksTeste from './pages/MocksTeste'
  import QueryCep from './components/QueryCep'
  
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
          <Route path="/changeEmail" element={<ChangeEmail />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/disableAccount" element={<DisableAccount />} />
          <Route path="/loggedIn" element={<LoggedIn />} />
          <Route path="/mocks" element={<MocksTeste />} />
          <Route path="/querycep" element={<QueryCep />} />
          <Route element={<ProtectedRoutes redirectTo='/' />}>
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/registerBooks" element={<RegisterBooks />} /> */}
        
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

