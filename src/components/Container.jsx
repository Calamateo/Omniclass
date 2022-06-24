import React from 'react'
import { TableContext } from '../Context/TableContext';
import { ListaDeMateriales } from './ListaDeMateriales';
import { Navbar } from './Navbar';
import { TableContainer } from './TableContainer';
import { Loading } from './Loading';


function Container() {
  const { loading } = React.useContext(TableContext)
  
  return (
    <div>
        <Navbar />
        {
        loading ? 
        <div>
        <Loading />
        </div> :
        <div>
        <TableContainer />
        <ListaDeMateriales /> 
        </div>
      }</div>
  )
}

export {Container}