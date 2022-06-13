import React from "react";
import './TableApi.css';



export const TableAPI = () => {  

  const [datos, setDatos] = React.useState([]);
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
  const [nivel6View, setNivel6View] = React.useState([]);
  const [informacion, setInformacion] = React.useState([]);

  
  
  React.useEffect(() => {
    fetchData();




  }, []);

  //Poner aqui la URL base
  const URL = 'http://127.0.0.1:8000/';

  const fetchData = async () => {

    //Nivel 1 data
    const data = await fetch(`${URL}OMC23Nivel1/`)
    const users = await data.json();
    //const registroFinal = users.results.filter(regFin => regFin.regFinal === true);
    await setNivel1(users.results);    
    await console.table(nivel1);
    await setDatos(users.results);

    //Nivel 2 data
    const data2 = await fetch(`${URL}OMC23Nivel2/`)
    const users2 = await data2.json();
    await setNivel2(users2.results);  

    //Nivel 3 data
    const data3 = await fetch(`${URL}OMC23Nivel3/`)
    const users3 = await data3.json();
    await setNivel3(users3.results);    

    //Nivel 4 data
    const data4 = await fetch(`${URL}OMC23Nivel4/`)
    const users4 = await data4.json();
    await setNivel4(users4.results);    

    //Nivel 5 data
    const data5 = await fetch(`${URL}OMC23Nivel5/`)
    const users5 = await data5.json();
    await setNivel5(users5.results);    


    //Nivel 6 data
    const data6 = await fetch(`${URL}OMC23Nivel6/`)
    const users6 = await data6.json();
    await setNivel6(users6.results);    


  };

  
  const getNiveles = (datooo) => {
    switch (niveles) {
      case '2':
        getNivel2(datooo);
        break;
      case '3':
        getNivel3(datooo);
        break;
      case '4':
        getNivel4(datooo);
        break;
      case '5':
        getNivel5(datooo);
        break;
      case '6':
        getNivel6(datooo);
        break;
      
      default:
        break;
    };
  };

  
  const getNivel2 = async (datooo) => {
    console.log(datooo);
    const reg = nivel2.filter(reg => reg.fk_Omc23N1 === datooo);
    await setDatos(reg) 
    await setNivel2View(reg);
    setNiveles("3")
    setInformacion(['Nivel 1']);
    console.table(nivel2View);
  }
  const getNivel3 = async (datooo) => {
    console.log(datooo);
    const reg = nivel3.filter(reg => reg.fk_Omc23N2 === datooo);
    await setDatos(reg) 
    await setNivel3View(reg);
    setNiveles("4")
    setInformacion([...informacion,'Nivel 2']);
    console.table(nivel3View);
  }
  const getNivel4 = async (datooo) => {
    console.log(datooo);
    const reg = nivel4.filter(reg => reg.fk_Omc23N3 === datooo);
    await setDatos(reg) 
    await setNivel4View(reg);
    setNiveles("5")
    setInformacion([...informacion,'Nivel 3']);
    console.table(nivel4View);
  }
  const getNivel5 = async (datooo) => {
    console.log(datooo);
    const reg = nivel5.filter(reg => reg.fk_Omc23N4 === datooo);
    await setDatos(reg) 
    await setNivel5View(reg);
    setNiveles("6")
    setInformacion([...informacion,'Nivel 4']);
    console.table(nivel5View);
  }
  const getNivel6 = async (datooo) => {
    console.log(datooo);
    const reg = nivel6.filter(reg => reg.fk_Omc23N5 === datooo);
    await setDatos(reg) 
    await setNivel6View(reg);
    setNiveles("7")
    setInformacion([...informacion,'Nivel 5']);
    console.table(nivel6View);
  }
 
  const volver = (valor) => {
    switch (valor) {
      case '3':
        setDatos(nivel1);
        setNiveles('2');
        setInformacion(informacion.slice(0,0));
        break;

      case '4':
        setDatos(nivel2View);
        setNiveles('3');
        setInformacion(informacion.slice(0,1));
        break;

      case '5':
        setDatos(nivel3View);
        setNiveles('4');
        setInformacion(informacion.slice(0,2));
        break;

      case '6':
        setDatos(nivel4View);
        setNiveles('5');
        setInformacion(informacion.slice(0,3));
        break;

      case '7':
        setDatos(nivel5View);
        setNiveles('6');
        setInformacion(informacion.slice(0,4));
        break;
    
      default:
        break;
    }
  }

  return (
    <React.Fragment>
        <button onClick={() => volver(niveles)}>Regresar</button>
      <br />
      {
        informacion.map((item, index) =>(
          <a className="pe-1" key={index} href="/#" onClick={()=>volver(String(index+3))}>{`${item}>`}</a>
        ))
      }
        {/* <a href="/#" onClick={()=>volver('3')}>nivel {niveles-1} </a> */}
      
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
                <td>{index +1}</td>
                <td>{item.Codigo}</td>
                <td>{item.descriSpa}</td>
                <td>{item.descriEng}</td>
                <td><button type="button" className="btn btn-primary btn-sm" onClick={() =>getNiveles(index+1)}>{item.regFinal ? 'Seleccionar' : `Nivel ${niveles}`}</button> </td>
            </tr>
        ))
    }
  </tbody>
</table>


  </React.Fragment>
  );
};
