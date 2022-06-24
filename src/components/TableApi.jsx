import React from 'react'
import { TableContext } from '../Context/TableContext';
import { VistaParcial } from './VistaParcial'

function TableApi() {
  
const {
  volver,
  niveles,
  informacion,
  datos,
  getNiveles,
  setDescripcion,
  formularioActivate,
  getVistaParcial,
} = React.useContext(TableContext)

  return (
    <React.Fragment>

      <section className="container mb-3">
      

    <table className="table" id="tableMaterials">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Código</th>
      <th scope="col">Descripción en Español</th>
      <th scope="col">Descripción en Ingles</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody >
    {
        datos.map((item, index) =>(
            <tr key={index} className="seleccion" id={item.idOmc23N1}>
              <td>{item.idOmc23N1? item.idOmc23N1 : item.idOmc23N2 ? item.idOmc23N2 : item.idOmc23N3 ? item.idOmc23N3 : item.idOmc23N4 ? item.idOmc23N4 : item.idOmc23N5}</td>
                <td>{item.Codigo}</td>
                <td>{item.descriSpa}</td>
                <td>{item.descriEng}</td>
                {
                  
                  item.regFinal ?
                  <td><button type="button" className="btn btn-info btn-sm" onClick={() =>getVistaParcial(item.Codigo)}>Seleccionar</button></td> :
                  <td><button type="button" className="btn btn-dark btn-sm" onClick={() =>{setDescripcion(item.descriSpa); getNiveles(item.idOmc23N1? item.idOmc23N1 : item.idOmc23N2 ? item.idOmc23N2 : item.idOmc23N3? item.idOmc23N3 : item.idOmc23N4 ? item.idOmc23N4 : item.idOmc23N5 ? item.idOmc23N5 : item.idOmc23N6);}}>{item.regFinal ? 'Seleccionar' : `Nivel ${niveles}`}</button> </td>
                }
            </tr>
        )) 
    }
  </tbody>
</table>
{/* <button className="btn btn-dark" onClick={() => volver(informacion.length-1)}>Regresar</button> */}
      {
        informacion.map((item, index) =>(
          <a className="pe-2" key={index} href="/#" onClick={()=>volver(index)}>{`${item.nivel} ${item.descrip}>`}</a>
        ))
      }
      {/* <h2>Nivel {niveles-1} <h3>{descripcion}</h3></h2> */}
      </section>

    {
      formularioActivate ? <VistaParcial /> : ""
    }

  </React.Fragment>
  );
};

export {TableApi}