import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <ItemDetailContainer />
          }/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
