import React, { Component } from 'react';

class Enviar extends Component{

    constructor () {
        super();
        this.state = {
          Nombre: '',
          Apellido: '',
          Telefono: ''
        };
        this.Datos = this.Datos.bind(this);
      }
      
    Datos(e) {
        e.preventDefault();
        let Nombre = document.querySelector('#nombre').value;
        let Apellido = document.querySelector('#apellido').value;
        let Telefono = document.querySelector('#telefono').value;
        
        let contacto = {nombre:Nombre,apellido:Apellido,telefono:Telefono};
    
        fetch("http://www.raydelto.org/agenda.php",{
            method:'POST',
            body:JSON.stringify(contacto)}
        ).then(res => res.json()).then(
            (res) =>
            {
                console.log(res);
                
            }
        );
            alert("Informacion Enviada");
      }      
    render(){
        return(
        <div className="Mostrar">
            <button  className="button" type="submit" onClick ={this.Datos}  >Enviar</button>
        </div>

        );
    }

}

export default Enviar;
