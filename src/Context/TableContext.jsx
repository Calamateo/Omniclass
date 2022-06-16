import React from "react";

const TableContext = React.createContext();

function TableProvider(props){

//Variables for Omniclass 23
  const [datos, setDatos] = React.useState([]);
  const [descripcion, setDescripcion] = React.useState("");
  const [niveles, setNiveles] = React.useState("2");
  const [nivel1, setNivel1] = React.useState([]);
  const [nivel2, setNivel2] = React.useState([]);
  const [nivel2View, setNivel2View] = React.useState([]);
  const [nivel3, setNivel3] = React.useState([]);
  const [nivel3View, setNivel3View] = React.useState([]);
  const [nivel4, setNivel4] = React.useState([]);
  const [nivel4View, setNivel4View] = React.useState([]);
  const [nivel5, setNivel5] = React.useState([]);
  const [nivel5View, setNivel5View] = React.useState([]);
  const [nivel6, setNivel6] = React.useState([]);
  const [informacion, setInformacion] = React.useState([]);
  const [material, setMaterial] = React.useState('');
  const [vistaParcial, setVistaParcial] = React.useState({})
  const [formularioActivate, setFormularioActivate] = React.useState(false);
  const [listarEsfuerzo,  setListarEsfuerzo] = React.useState([])
  const [listarValorEsfuerzo, setListarValorEsfuerzo] = React.useState([])
  const [listarUnidadesMedida, setListarUnidadesMedida] = React.useState([])
  const [listarTipoResistencia, setListarTipoResistencia] = React.useState([])
  const [listarAplPrincipales, setListarAplPrincipales] = React.useState([])
  const [listarTMA, setListarTMA] = React.useState([])
  const [listarRevenimiento, setListarRevenimiento] = React.useState([])
  const [listarDensidad, setListarDensidad] = React.useState([])
  const [listarSistColocacion, setListarSistColocacion] = React.useState([])
  const [listarClasExposicion, setListarClasExposicion] = React.useState([])
  const [listarFlujoRev, setListarFlujoRev] = React.useState([])
  const [listarIonCloruro, setListarIonCloruro] = React.useState([])
  const [listarFibraConcre, setListarFibraConcre] = React.useState([])
  
  

  //UseEffect initializes the Api
  React.useEffect(() => {
    fetchData();
  }, []);

  //URL base for API requests
  const URL = 'http://127.0.0.1:8000/api/v1/';

  //Get API
  const fetchData = async () => {
    //Level 1 data
    const data = await fetch(`${URL}OMC23Nivel1/`)
    const users = await data.json();
    await setNivel1(users.results);    
    await console.table(users.results);
    await setDatos(users.results);

    //Level 2 data
    const data2 = await fetch(`${URL}OMC23Nivel2/`)
    const users2 = await data2.json();
    await setNivel2(users2.results);  

    //Level 3 data
    const data3 = await fetch(`${URL}OMC23Nivel3/`)
    const users3 = await data3.json();
    await setNivel3(users3.results);    

    //Level 4 data
    const data4 = await fetch(`${URL}OMC23Nivel4/`)
    const users4 = await data4.json();
    await setNivel4(users4.results);    

    //Level 5 data
    const data5 = await fetch(`${URL}OMC23Nivel5/`)
    const users5 = await data5.json();
    await setNivel5(users5.results);    


    //Level 6 data
    const data6 = await fetch(`${URL}OMC23Nivel6/`)
    const users6 = await data6.json();
    await setNivel6(users6.results);    

    const materials = await fetch(`${URL}Materiales/`)
    const materialsData = await materials.json();
    const numero = materialsData.count + 1;
    await setMaterial(String(numero).padStart(5,0));

    const listarEsfuerzo = await fetch(`${URL}ListarEsfuerzo/`)
    const listarEsfuerzoData = await listarEsfuerzo.json();
    await setListarEsfuerzo(listarEsfuerzoData.results);

    const esfuerzo = await fetch(`${URL}ListarValorEsfuerzo/`)
    const esfuerzoData = await esfuerzo.json();
    await setListarValorEsfuerzo(esfuerzoData.results);
    
    const listarUnidad = await fetch(`${URL}ListarUnidadesMedida/`)
    const listarUnidadData = await listarUnidad.json();
    await setListarUnidadesMedida(listarUnidadData.results);

    const listarTipoResistencia = await fetch(`${URL}ListarTipoResistencia/`)
    const listarTipoResistenciaData = await listarTipoResistencia.json();
    await setListarTipoResistencia(listarTipoResistenciaData.results);

    const listarAplPrincipales = await fetch(`${URL}ListarAplPrincipales/`)
    const listarAplPrincipalesData = await listarAplPrincipales.json();
    await setListarAplPrincipales(listarAplPrincipalesData.results);

    const listarTMA = await fetch(`${URL}ListarTMA/`)
    const listarTMAData = await listarTMA.json();
    await setListarTMA(listarTMAData.results);

    const listarRevenimiento = await fetch(`${URL}ListarRevenimiento/`)
    const listarRevenimientoData = await listarRevenimiento.json();
    await setListarRevenimiento(listarRevenimientoData.results);

    const listarDensidad = await fetch(`${URL}ListarDensidad/`)
    const listarDensidadData = await listarDensidad.json();
    await setListarDensidad(listarDensidadData.results);

    const listarSistColocacion = await fetch(`${URL}ListarSistColocacion/`)
    const listarSistColocacionData = await listarSistColocacion.json();
    await setListarSistColocacion(listarSistColocacionData.results);

    const listarClasExposicion = await fetch(`${URL}ListarClasExposicion/`)
    const listarClasExposicionData = await listarClasExposicion.json();
    await setListarClasExposicion(listarClasExposicionData.results);
    
    const listarFlujoRev = await fetch(`${URL}ListarFlujoRev/`)
    const listarFlujoRevData = await listarFlujoRev.json();
    await setListarFlujoRev(listarFlujoRevData.results);
    
    const listarIonCloruro = await fetch(`${URL}ListarIonCloruro/`)
    const listarIonCloruroData = await listarIonCloruro.json();
    await setListarIonCloruro(listarIonCloruroData.results);
    
    const listarFibraConcre = await fetch(`${URL}ListarFibraConcre/`)
    const listarFibraConcreData = await listarFibraConcre.json();
    await setListarFibraConcre(listarFibraConcreData.results);

  };

  //get levels
  const getNiveles = (idLevel) => {
    switch (niveles) {
      case '2':
        getNivel2(idLevel);
        break;
      case '3':
        getNivel3(idLevel);
        break;
      case '4':
        getNivel4(idLevel);
        break;
      case '5':
        getNivel5(idLevel);
        break;
      case '6':
        getNivel6(idLevel);
        break;
      
      default:
        break;
    };
  };

  
  const getNivel2 = async (idLevel) => {
    const reg = nivel2.filter(reg => reg.fk_Omc23N1 === idLevel);
    await setDatos(reg) 
    await setNivel2View(reg);
    setNiveles("3")
    await console.log(descripcion)
    await setInformacion([...informacion,{nivel:'Nivel 1', descrip: descripcion }]);
    console.table(reg);
    console.table(informacion);
  }
  const getNivel3 = async (idLevel) => {
    const reg = nivel3.filter(reg => reg.fk_Omc23N2 === idLevel);
    await setDatos(reg) 
    await setNivel3View(reg);
    setNiveles("4")
    setInformacion([...informacion,{nivel:'Nivel 2', descrip: descripcion}]);
    console.table(reg);
    console.table(informacion);
  }
  const getNivel4 = async (idLevel) => {
    const reg = nivel4.filter(reg => reg.fk_Omc23N3 === idLevel);
    await setDatos(reg) 
    await setNivel4View(reg);
    setNiveles("5")
    setInformacion([...informacion,{nivel:'Nivel 3', descrip: descripcion}]);
    console.table(reg);
    console.table(informacion);
  }
  const getNivel5 = async (idLevel) => {
    const reg = nivel5.filter(reg => reg.fk_Omc23N4 === idLevel);
    await setDatos(reg) 
    await setNivel5View(reg);
    setNiveles("6")
    setInformacion([...informacion,{nivel:'Nivel 4', descrip: descripcion}]);
    console.table(reg);
    console.table(informacion);
  }
  const getNivel6 = async (idLevel) => {
    const reg = nivel6.filter(reg => reg.fk_Omc23N5 === idLevel);
    await setDatos(reg) 
    setNiveles("7")
    setInformacion([...informacion,{nivel:'Nivel 5', descrip: descripcion}]);
    console.table(reg);
    console.table(informacion);
  }
 //Return Values
  const volver = (valor) => {
    switch (valor) {
      case 0:
        setDatos(nivel1);
        setNiveles('2');
        setInformacion([]);
        setDescripcion("");
        setFormularioActivate(false);
        break;
      case 1:
        setDatos(nivel2View);
        setNiveles('3');
        setInformacion(informacion.slice(0,2));
        setFormularioActivate(false);
        break;
      case 2:
        setDatos(nivel3View);
        setNiveles('4');
        setInformacion(informacion.slice(0,3));
        setFormularioActivate(false);
        break;
      case 3:
        setDatos(nivel4View);
        setNiveles('5');
        setInformacion(informacion.slice(0,4));
        setFormularioActivate(false);
        break;
      case 4:
        setDatos(nivel5View);
        setNiveles('6');
        setInformacion(informacion.slice(0,5));
        setFormularioActivate(false);
        break;    
      default:
        break;
    }
  }

  const getVistaParcial = async (codigo) => {
    const materials = await fetch(`${URL}Materiales/`)
    const materialsData = await materials.json();
    const numero = materialsData.count + 1;
    await setMaterial(String(numero).padStart(5,0));

    const reg = datos.filter(reg => reg.Codigo === codigo)
    await setVistaParcial(reg)
    console.table(vistaParcial)
    console.table(reg)
    console.log(reg[0].Codigo);
    console.log(reg);
    setFormularioActivate(true)
  }
  return (    
    <TableContext.Provider value ={{
        volver,
        niveles,
        informacion,
        datos,
        getNiveles,
        setDescripcion,
        descripcion,
        getVistaParcial,
        vistaParcial,
        formularioActivate,
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
      }}>
        {props.children}
    </TableContext.Provider>
);
}

export {TableContext , TableProvider }