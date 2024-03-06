
const button = document.querySelector("button");
button.addEventListener("click", () => {

  const titulo = document.getElementById("titulo")
  const descripcion = document.getElementById("descripcion")
  const fechainicio = document.getElementById("inicio")
  const fechafinal = document.getElementById("fin")

  const url = "http://localhost:3001/api/v1/insertar";
  fetch(url, {
    method: "post",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        "titulo" : titulo.value,
        "descripcion" :descripcion.value,
        "fechainicio" : fechainicio.value,
        "fechafinal" : fechafinal.value
    })
    
  })

    .then(res => res.json())
    .then(mensaje => {
      document.querySelector("div").innerHTML = mensaje;
    })

});

fetch("http://localhost:3001/api/v1/leer")
  .then(res => res.json())
  .then(basedatos => {
    const cajaResultados = document.getElementById("cajaResultados");
    const arrayDatosConsulta = basedatos.resultado;
    for (let i = 0; i < arrayDatosConsulta.length; i++) {
      cajaResultados.innerHTML += `
    
        
        <div id="resultado">
        
        <h2 id="encabezados">ID</h2>
        <h3 id="contenido">${arrayDatosConsulta[i].id}</h3>
        <h2 id="encabezados">Titulo</h2>
        <h3 id="contenido">${arrayDatosConsulta[i].titulo}</h3>
        <h2 id="encabezados" >Descripcion</h2>
        <h3 id="contenido">${arrayDatosConsulta[i].descripcion}  </h3>
        <h2 id="encabezados" >FechaInicio</h2>
        <h3 id="contenido">${arrayDatosConsulta[i].fechainicio} </h3>
        <h2 id="encabezados">FechaFinal</h2>
        <h3 id="contenido">${arrayDatosConsulta[i].fechafinal}
        </h3>
        </div>   
      `;
    }
  })
  .catch(error => alert(error))


  