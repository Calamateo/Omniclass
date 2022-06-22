import React from 'react';
import './App.css';
// import { ListaDeMateriales } from './components/ListaDeMateriales';
import { Navbar } from './components/Navbar';
import { TableAPI } from './components/TableApi';
import { TableProvider } from './Context/TableContext';

function App() {
 

  return (
      <TableProvider >
      <div className="">
      <Navbar />
      <TableAPI />
      {/* <ListaDeMateriales /> */}
      </div>
      </TableProvider>
  );
}

export default App;
