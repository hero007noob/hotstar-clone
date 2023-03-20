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
import { getParentControls, setParentControls } from './Redux/parentRedux/action';

function App() {
  let dispatch = useDispatch();

  const checkParentControls = () => {
    getParentControls().then((response) => {
      console.log('RES', response);
      let x = response.status
      dispatch(setParentControls({ value: x }));
    })
  }
  useEffect(() => {
    dispatch(checkLogin());
    checkParentControls();
  }, [])



  return (
    <div className="App">


      <AllRoutes />


    </div>
  );
}

export default App;
