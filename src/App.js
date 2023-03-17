import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Component/Login';
import ProductDetail from './Component/ProductDetail';
import Home from './Component/Home/Home';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Navbar from './Component/Navbar/Navbar'
import MobileFooter from './Component/Navbar/MobileFooter'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <ChakraProvider>
          </ChakraProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
