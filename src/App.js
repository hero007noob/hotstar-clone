import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Component/Login';
import ProductDetail from './Component/ProductDetail';
import Home from './Component/Home/Home';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChakraProvider>
          <Home />
        </ChakraProvider>
      </Provider>
    </div>
  );
}

export default App;
