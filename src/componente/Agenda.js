import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/Agenda.css';
import Mostrar from './Mostrar';
import Enviar from './Enviar';

class Agenda extends React.Component{

  render(){
    return (
      <div className="App">
          
        <img src={logo} className="App-logo" alt="logo" />
       
      <div>
          <form method="POST" id="enviar" >
          <div className="str">Agenda de contacto</div>
                  <br></br>
                  <label className="label1">Nombre</label>
                  <br></br>
                  <input id="nombre"type="text" placeholder="Nombre" required/>
                  <br></br>
                  <br></br>
                  <label   >Apellido</label>
                  <br></br>
                  <input id="apellido" type="text" placeholder="Apellido" required/>
                  <br></br>
                  <br></br>
                  <label  >Telefono</label>
                  <br></br>
                  <input  id="telefono" type="text" placeholder="Telefono" required />
                  <br></br>
                  <Enviar/>
                  <Mostrar/>
          </form>
           
          <h2 id="H">Listado de Contactos</h2>
          <div className="MostrarD" id="prueba">

          </div> 
      </div>
      </div>
    );
  }
}

export default Agenda;

