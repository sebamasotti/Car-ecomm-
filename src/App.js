import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbarq from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './Context/CartContext';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Navbarq />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:idCategory" element={<ItemListContainer />}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/cart" element={<CartWidget />}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
