import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola desde el listContainer"/>
    </>
  );
}

export default App;
