import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <ItemListContainer />
          }/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
