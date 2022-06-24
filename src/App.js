import React from 'react';
import './App.css';
import { Container } from './components/Container';
import { TableProvider } from './Context/TableContext';


function App() {


  return (
      <TableProvider >
        <Container />
      </TableProvider>
  );
}

export default App;
