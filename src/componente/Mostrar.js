import React, { Component } from 'react';

class Mostrar extends Component{
    constructor () {
        super();
        this.state = {
          Nombre: '',
          Apellido: '',
          Telefono: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    handleSubmit(e) {
        e.preventDefault();
        fetch("http://www.raydelto.org/agenda.php")
        .then(
        function(valor)
        {
            return valor.json();
        }
        ).then(function(valor){
            
            var imprime = document.querySelector('#prueba');
            var valores = '';
           
            for(var i = 0; i < valor.length; i++){
           
                valores +='<br><a>Nombre:</a><br>' + valor[i].nombre + 
                "<br><br>Apellido: <br>" + valor[i].apellido + 
                "<br><br>Telefono: <br>" + valor[i].telefono + "<br>"+"<hr>";
              }
              
              imprime.innerHTML = valores;
        })
      }

    render(){
        return(
        <div  id="MostrarDS">
            
            <button className="button" type="submit" onClick ={this.handleSubmit}  >Mostrar</button>

        </div>
        
        );
    }

}

export default Mostrar;
