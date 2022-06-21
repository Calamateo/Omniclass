import './App.css';
import { Navbar } from './components/Navbar';
import { TableAPI } from './components/TableApi';
import { TableProvider } from './Context/TableContext';

function App() {


  return (
      <TableProvider >
      <div className="">
      <Navbar />
      <TableAPI />
      </div>
      </TableProvider>
  );
}

export default App;
