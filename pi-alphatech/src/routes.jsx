import { 
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
  } from "react-router-dom";
  
  import Home from './pages/Home';
  
  function ProtectedRoutes({ redirectTo }) {
    const token = localStorage.getItem('token');
    return token ? <Outlet /> : <Navigate to={redirectTo} />;
  }
  
  export default function MyRoutes() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path='/home' element={<Home />} />
            <Route element={<ProtectedRoutes redirectTo='/' />}>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }