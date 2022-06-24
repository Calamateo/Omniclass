import React from 'react'
import { TableContext } from '../Context/TableContext'
import { ButtonClass } from './ButtonClass'
import { TableApi } from './TableApi'
import { TableApi41 } from './TableApi41'

function TableContainer() {
  const {
    tableBool,
  } = React.useContext(TableContext)

  return (
    <div>
        <ButtonClass />
        {
            tableBool ? <TableApi41 /> : <TableApi />
        }
        
        

    </div>
  )
}

export {TableContainer}