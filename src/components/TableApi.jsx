import React from "react";


export const TableAPI = () => {

  
  const [omc23, setOmc23] = React.useState([]);
  const [allOmc23, setAllOmc23] = React.useState([]);
  const [descripcion, setDescripcion] = React.useState("Todos los registros")

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var myHeaders = new Headers();
    //myHeaders.append("Authorization", "Basic Y2FsYW1hdGVvOkthbGFtYXRlMA==");
    myHeaders.append("Cookie", "ARRAffinity=51f7d50ebb3aaef6dc8dc5c230072f869db8a7342ae1196cc78e4b3b1ab2053e");
    myHeaders.append("Content-type", "application/json;charset=utf-8");

    // var requestOptions = {
    // method: 'GET',
    // headers: myHeaders,
    // body: raw,
    // redirect: 'follow'  
    // };

    
    const data = await fetch("http://test-api-ccg.azurewebsites.net/api/OMC23Nivel1/")
    const users = await data.json();
    console.log(users)

    //const registroFinal = users.results.filter(regFin => regFin.regFinal === true);
    await setAllOmc23(users.results);
    await setOmc23(users.results);
    console.table(omc23);
  };

  const registrosFinales = () => {
    const registroFinal = omc23.filter(regFin => regFin.regFinal === true);
    setAllOmc23(registroFinal);
    setDescripcion("Registros finales")
    console.table(allOmc23);
  }
  
  const todosLosRegistros = () => {
    setAllOmc23(omc23);
    setDescripcion("Todos los registros")
  }

  
  return (
    <React.Fragment>
    
    <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Código</th>
      <th scope="col">Descripción en Español</th>
      <th scope="col">Descripción en Ingles</th>
    </tr>
  </thead>
  <tbody>
    {
        allOmc23.map((item, index) =>(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.Codigo}</td>
                <td>{item.descriSpa}</td>
                <td>{item.descriEng}</td>
            </tr>
        ))
    }
  </tbody>
</table>
    
    <button type="button" className="btn btn-lg btn-primary" onClick={registrosFinales} >Registros finales</button> 
    <button type="button" className="btn btn-lg btn-primary" onClick={todosLosRegistros} >Todos los registros</button> 


  </React.Fragment>
  );
};
