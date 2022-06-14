import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { TableAPI } from './components/TableApi';
import { TableProvider } from './Context/TableContext';

function App() {


  return (
      <TableProvider >
      <div className="bg-dark text-white vh-100">
      <Navbar />
      <TableAPI />
      </div>
      </TableProvider>
  );
}

export default App;
