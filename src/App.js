import './App.css';

import Login from './Component/Login';
import ProductDetail from './Component/ProductDetail';
import Home from './Component/Home/Home';
import { Provider, useDispatch } from 'react-redux';
import Navbar from './Component/Navbar/Navbar'
import MobileFooter from './Component/Navbar/MobileFooter'
import AllRoutes from './Routes/AllRoutes';
import { useEffect } from 'react';
import { checkLogin } from './Redux/loginredux/action';

function App() {
  let dispatch = useDispatch();


  useEffect(() => {
    dispatch(checkLogin());

  }, [])



  return (
    <div className="App">


      <AllRoutes />


    </div>
  );
}

export default App;
