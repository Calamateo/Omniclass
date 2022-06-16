import React from "react";
import { TableContext } from "../Context/TableContext";

function VistaParcial() {
  const {
    formularioActivate,
    vistaParcial,
    material,
    listarEsfuerzo,
    listarValorEsfuerzo,
    listarUnidadesMedida,
    listarTipoResistencia,
    listarAplPrincipales,
    listarTMA,
    listarRevenimiento,
    listarDensidad,
    listarSistColocacion,
    listarClasExposicion,
    listarFlujoRev,
    listarIonCloruro,
    listarFibraConcre,
  } = React.useContext(TableContext);


  const [esfuerzo, setEsfuerzo]= React.useState('')
  const [valorEsfuerzo, setValorEsfuerzo]= React.useState('')
  const [uValorEsfuerzo, setUValorEsfuerzo]= React.useState('')
  const [resistenciaValorEsfuerzo, setResistenciaValorEsfuerzo]= React.useState('')
  const [aplPrincipales, setAplPrincipales]= React.useState('')
  const [TMA, setTMA]= React.useState('')
  const [uTMA, setUTMA]= React.useState('')
  const [revenimiento, setRevenimiento]= React.useState('')
  const [uRevenimiento, setURevenimiento]= React.useState('')
  const [densidad, setDensidad]= React.useState('')
  const [uDensidad, setUDensidad]= React.useState('')
  const [sisColocacion, setSisColocacion]= React.useState('')
  const [clasExposicion, setClasExposicion]= React.useState('')
  const [flujoRev, setFlujoRev]= React.useState('')
  const [uFlujoRev, setUFlujoRev]= React.useState('')
  const [uElasticidad, setUElasticidad]= React.useState('')
  const [ionCloruro, setIonCloruro]= React.useState('')
  const [fibra, setFibra]= React.useState('')
  const [color, setColor]= React.useState('')

  console.log(color);
  const datosGenerales = () => {
    const datosGeneralesdata = {
    esfuerzo,
    valorEsfuerzo,
    uValorEsfuerzo,
    resistenciaValorEsfuerzo,
    aplPrincipales,
    TMA,
    uTMA,
    revenimiento,
    uRevenimiento,
    densidad,
    uDensidad,
    sisColocacion,
    clasExposicion,
    flujoRev,
    uFlujoRev,
    uElasticidad,
    ionCloruro,
    fibra,
    }
    console.table(datosGeneralesdata);
  }

  return (
    <div className="container">
      <br />
      <hr />
      <br />
      
      <div className="row gy-2 border pt-1 pb-3">
        <label className="col-md-2 control-label">
          Código:
          <input
            type="text"
            value={formularioActivate ? vistaParcial[0].Codigo : ""}
            name="codigoOmc"
            className="form-control"
            disabled
          />
        </label>
        <label className="col-md-2 control-label">
          Consecutivo:
          <input
            className="form-control"
            type="text"
            value={material}
            disabled
          />
        </label>
        <label className="col-md-6 control-label">
          Descripción en Inglés:
          <input
            type="text"
            className="form-control"
            value={formularioActivate ? vistaParcial[0].descriEng : ""}
            disabled
          />
        </label>
        <label className="col-md-6 control-label">
          Descripción en Español:
          <input
            type="text"
            className="form-control"
            value={formularioActivate ? vistaParcial[0].descriSpa : ""}
            disabled
          />
        </label>
      </div>

      <div className="row gy-2 justify-content-between my-2">
        {/* <!--Esfuerzo--> */}
        <label className="col-md-2 control-label">
          Esfuerzo:
          <select onChange={e => setEsfuerzo(e.target.value)} className="form-select form-select-sm" name="idEsfuerzo">
            <option >Selecciona...</option>
            {listarEsfuerzo.map((value, index) => (
              <option key={index} value={value.tipoEsfuerzo}>
                {value.tipoEsfuerzo}
              </option>
            ))}
          </select>
        </label>
        {/* <!--ValorEsfuerzo--> */}
        <label className="col-md-2 control-label">
          fc:
          <select onChange={e => setValorEsfuerzo(e.target.value)} className="form-select form-select-sm" name="idValEsf">
            <option value="">Selecciona...</option>
            {listarValorEsfuerzo.map((valorEs, index) => (
              <option key={index} value={valorEs.Valor}>
                {valorEs.Valor}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para ValorEsfuerzo--> */}
        <label className="col-md-2 control-label">
          Unidad Esfuerzo:
          <select onChange={e => setUValorEsfuerzo(e.target.value)} className="form-select form-select-sm" name="idUniMedVE">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.Unidad}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
        {/* <!--TipoResistencia para ValorEsfuerzo--> */}
        <label className="col-md-2 control-label">
          Tipo Resistencia:
          <select onChange={e => setResistenciaValorEsfuerzo(e.target.value)} className="form-select form-select-sm" name="idTipoResist">
            <option value="">Selecciona...</option>
            {listarTipoResistencia.map((value, index) => (
              <option key={index} value={value.Tipo}>
                {value.Tipo}
              </option>
            ))}
          </select>
        </label>
        {/* <!--AplPrincipales--> */}
        <label className="col-md-2 control-label">
          Usos y/o Aplicaciones:
          <select onChange={e => setAplPrincipales(e.target.value)} className="form-select form-select-sm" name="idAplPrinc">
            <option value="">Selecciona...</option>
            {listarAplPrincipales.map((value, index) => (
              <option key={index} value={value.aplicaciones}>
                {value.aplicaciones}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="row gy-2 justify-content-between">
        {/* <!--TMA--> */}
        <label className="col-sm-3 control-label">
          TMA:
          <select onChange={e => setTMA(e.target.value)} className="form-select form-select-sm" name="idTma">
            <option value="">Selecciona...</option>
            {listarTMA.map((value, index) => (
              <option key={index} value={value.valTma}>
                {value.valTma}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para TMA--> */}
        <label className="col-sm-3 control-label">
          Unidad TMA:
          <select onChange={e => setUTMA(e.target.value)} className="form-select form-select-sm" name="idUniMedTMA">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.Unidad}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
        {/* <!--Revenimiento--> */}
        <label className="col-sm-3 control-label">
          Revenimiento:
          <select onChange={e => setRevenimiento(e.target.value)} className="form-select form-select-sm" name="idReven">
            <option value="">Selecciona...</option>
            {listarRevenimiento.map((value, index) => (
              <option key={index} value={value.valRev}>
                {value.valRev}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para Revenimiento--> */}
        <label className="col-sm-3 control-label">
          Unidad de Revenimiento:
          <select onChange={e => setURevenimiento(e.target.value)} className="form-select form-select-sm" name="idUniMedR">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.Unidad}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* <!--Densidad--> */}
      <hr />
      <div className="row gy-2 justify-content-around">
        <label className="col-sm-4 control-label">
          Densidad:
          <select onChange={e => setDensidad(e.target.value)} className="form-select form-select-sm" name="idDensidad">
            <option value="">Selecciona...</option>
            {listarDensidad.map((value, index) => (
              <option key={index} value={value.valDensidad}>
                {value.valDensidad}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para Densidad--> */}
        <label className="col-sm-4 control-label">
          Unidad Densidad:
          <select onChange={e => setUDensidad(e.target.value)} className="form-select form-select-sm" name="idUniMedD">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.Unidad}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
        {/* <!--SisColocacion--> */}
        <label className="col-sm-4 control-label">
          Sistema de Colocación:
          <select onChange={e => setSisColocacion(e.target.value)} className="form-select form-select-sm" name="idSistColoc">
            <option value="">Selecciona...</option>
            {listarSistColocacion.map((value, index) => (
              <option key={index} value={value.tipoSistema}>
                {value.tipoSistema}
              </option>
            ))}
          </select>
        </label>
        {/* <!--ClasExposicion--> */}
        <label className="col-sm-4 control-label">
          Clase de Exposición:
          <select onChange={e => setClasExposicion(e.target.value)} className="form-select form-select-sm" name="idClasExpo">
            <option value="">Selecciona...</option>
            {listarClasExposicion.map((value, index) => (
              <option key={index} value={value.Clase}>
                {value.Condicion}
              </option>
            ))}
          </select>
        </label>
        {/* <!--FlujoRev--> */}
        <label className="col-sm-4 control-label">
          Flujo de Revenimiento:
          <select onChange={e => setFlujoRev(e.target.value)} className="form-select form-select-sm" name="idFlujoRev">
            <option value="">Selecciona...</option>
            {listarFlujoRev.map((value, index) => (
              <option key={index} value={value.valFluRev}>
                {value.valFluRev}
              </option>
            ))}
          </select>
        </label>
        {/* <!--UnidadesMedida para FlujoRev--> */}
        <label className="col-sm-4 control-label">
          Unidad FlujoRev:
          <select onChange={e => setUFlujoRev(e.target.value)} className="form-select form-select-sm" name="idUniMedFR">
            <option value="">Selecciona...</option>
            {listarUnidadesMedida.map((value, index) => (
              <option key={index} value={value.Unidad}>
                {value.Unidad}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="card-header">
        <strong>Caracteristicas Especificas</strong>
      </div>
      <div className="card-body">
        <form className="row gy-2 justify-content-start align-items-end form">

          <div className="col-3">
          <label className="form-label" htmlFor="Abreviado">Abreviado:</label>
          <input className="form-control form-control-sm" id="Abreviado" type="text" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Modulo de Elasticidad:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="number" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
            <label className="form-label" htmlFor="elasticidad">Edad en dias:</label>
            <div className="input-group">
              <input type="number" aria-label="Last name" className="form-control form-control-sm"/>
              <select onChange={e => setUElasticidad(e.target.value)} className="form-select form-control-sm" id="inputGroupSelect01">
              <option >Tiempo</option>
              <option defaultValue="1">Horas</option>
              <option defaultValue="2">Días</option>
              </select>
            </div>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Absorción Capilar:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="number" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Abreviado 2:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="text" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Trabajabilidad Extendida:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="number" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Clase(NTC-CDMX):</label>
          <input className="form-control form-control-sm" id="elasticidad" type="text" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Color:</label>
          <input className="form-control form-control-sm" onChange={e => setColor(e.target.value)} id="elasticidad" type="text" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Comportamiento:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="text" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Contenido de aire:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="text" placeholder="" aria-label=""></input>
          </div>

          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">Contenido de Ion Cloruro:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="number" placeholder="" aria-label=""></input>
          </div>

          <label className="col-md-3 control-label">
            Ion Cloruro:
            <select onChange={e => setIonCloruro(e.target.value)} className="form-select form-select-sm" name="idIonClor">
              <option value="">Selecciona...</option>
              {listarIonCloruro.map((value, index) => (
                <option key={index} value={value.tipoPenet}>
                  {value.tipoPenet} {value.cargaPesada} Coulomb
                </option>
              ))}
            </select>
          </label>
          <div className="col-3">
          <label className="form-label" htmlFor="elasticidad">  Tiempo de Prueba del ensayo Ion Cloruro:</label>
          <input className="form-control form-control-sm" id="elasticidad" type="number" placeholder="" aria-label=""></input>
          </div>

          <label className="col-md-3 control-label">
            Fibra:
            <select onChange={e => setFibra(e.target.value)} className="form-select form-select-sm" name="idFibraConcre">
              <option value="">Selecciona...</option>
              {listarFibraConcre.map((value, index) => (
                <option key={index} value={value.Fibras}>
                  {value.Fibras}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <div className="card-footer ">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="keyword" className="form-label">
              Palabras Clave:
            </label>
            <textarea id="keyword" className="form-control" rows="2"></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="comentarios" className="form-label">
              Comentarios:
            </label>
            <textarea
              className="form-control"
              id="comentarios"
              row="3"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-success mt-5" onClick={datosGenerales}>
          Registrar
        </button>
      </div>
    </div>
  );
}

export { VistaParcial };
