import React from 'react'

function ListaDeMateriales() {

  return (
    <div className='container'>
        <h2 className='h1 text-center'>LISTA DE MATERIALES/PRODUCTOS</h2>
        <br />
        <h2 className='h2'>Selecciona una clasificación</h2>
        <div className="row py-3 align-items-center text-center">
          <div className="col-3"><button className='btn btn-primary'>Acondicionamiento del terreno</button></div>
          <div className="col-3"><button className='btn btn-primary'>Cimientos</button></div>
          <div className="col-3"><button className='btn btn-primary'>Estructuras</button></div>
          <div className="col-3"><button className='btn btn-primary'>Fachadas y muros divisorios</button></div>
        </div>
        <div className="row ">
          <div className="col-3"><button className='btn btn-primary'>Remates y ayudas</button></div>
          <div className="col-3"><button className='btn btn-primary'>Firmes y pavimentos urbanos</button></div>
          <div className="col-3"><button className='btn btn-primary'>Instalaciones</button></div>
          <div className="col-3"><button className='btn btn-primary'>Equipamiento urbano</button></div>
        </div>
    </div>
  )
}

export {ListaDeMateriales}