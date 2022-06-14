import React from 'react'
import { TableContext } from '../Context/TableContext'

function VistaParcial() {

  const {
    formularioActivate,
    vistaParcial,
    material,
    listarEsfuerzo,
    valorEsfuerzo,
    listarUnidadesMedida,
    listarTipoResistencia,
    listarAplPrincipales,
  }=React.useContext(TableContext)
  
  return (
    <div className="container">
      <div className="row gy-2 border pt-1 pb-3">
          <label className="col-md-2 control-label">Código:<input type="text" value={formularioActivate? vistaParcial[0].Codigo : ""}
              name="codigoOmc" className="form-control" disabled/></label>
          <label className="col-md-2 control-label">Consecutivo:<input className="form-control" type="text"
              value={material} disabled/></label>
          <label className="col-md-6 control-label">Descripción en Inglés:<input type="text" className="form-control"
              value={formularioActivate? vistaParcial[0].descriEng : ""} disabled/></label>
          <label className="col-md-6 control-label">Descripción en Español:<input type="text" className="form-control"
              value={formularioActivate? vistaParcial[0].descriSpa : ""} disabled/></label>
      </div>

      <div className="row gy-2 justify-content-between my-2">
          {/* <!--Esfuerzo--> */}
          <label className="col-md-2 control-label">Esfuerzo:
            <select className="form-select form-select-sm" name="idEsfuerzo">
              <option value="">Selecciona...</option>
              {  
                listarEsfuerzo.map((value, index)=>(
                  <option key={index} value={value.idEsfuerzo}>
                {value.tipoEsfuerzo}
              </option>
                ))
              }
              
            </select>
          </label>
          {/* <!--ValorEsfuerzo--> */}
          <label className="col-md-2 control-label">fc:
            <select className="form-select form-select-sm" name="idValEsf">
              <option value="">Selecciona...</option>
              {
                valorEsfuerzo.map((valorEs, index)=>(
              <option key={index} value={valorEs.idValEsf}>
                {valorEs.Valor}
              </option>                  
                ))
              }
              
            </select>
          </label>
          {/* <!--UnidadesMedida para ValorEsfuerzo--> */}
          <label className="col-md-2 control-label">Unidad Esfuerzo:
            <select className="form-select form-select-sm" name="idUniMedVE">
              <option value="">Selecciona...</option>
              {
                listarUnidadesMedida.map((value, index)=>(
                  <option key={index} value={value.idUniMed}>
                    {value.Unidad}
                </option>
                ))
              }            
            </select>
          </label>
          {/* <!--TipoResistencia para ValorEsfuerzo--> */}
          <label className="col-md-2 control-label">Tipo Resistencia:
            <select className="form-select form-select-sm" name="idTipoResist">
              <option value="">Selecciona...</option>
              {
                listarTipoResistencia.map((value, index)=>(
                  <option key={index} value={value.idTipoResist}>
                    {value.Tipo}
                </option>
                ))
              }              
            </select>
          </label>
          {/* <!--AplPrincipales--> */}
          <label className="col-md-2 control-label">Usos y/o Aplicaciones:
            <select className="form-select form-select-sm" name="idAplPrinc">
              <option value="">Selecciona...</option>              
              {
                listarAplPrincipales.map((value, index)=>(
                  <option key={index} value={value.idAplPrinc}>
                    {value.aplicaciones}
                </option>
                ))
              }     
            </select>
          </label>
        </div>
    </div>
   
  )
}

export {VistaParcial}