import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import axios from "axios";
const api = axios.create({ baseURL: `patronatoinfantil.herokuapp.com` });

export default class Last10 extends Component {
  constructor(args) {
    super(args);

    this.state = {
      register: [],
      torneos: true,
      listas: "",
      torneoUpdate:""

      

    };
  }
onClick= () =>{
  this.setState({torneos:!this.state.torneos})
}
handleInputChangeNormal(event) {
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value,
  });}

  
  getRegister = (_) => {
    api.get(`/torneo/listar`)
      .then((res) => this.setState({ register: res.data }))
      .catch((err) => console.error(err));
  };





  renderRegister = ({ nombre, jugadores, actuales, juego, fechaInicio }) => {
  
      return (
        <span class="container-fluid ">
        <span class="row"  id="ContainerLogList">
        
          
        <span class="col-sm"  >
            <span >{"nombre: " + nombre}</span>
          </span>
          <span class="col-sm" >
            <span >{"jugadores: " + jugadores}</span>
          </span>
          <span class="col-sm" >
            <span >{"actuales: " + actuales}</span>
          </span>
          <span class="col-sm" >
            <span >{"juego: " + juego}</span>
          </span>
          <span class="col-sm" >
            <span >{"fecha Inicio: " + fechaInicio}</span>{" "}
          </span>
        
        </span>
        </span>
      );
   
  };

  ;

  render() {

    return (
     <div>
      <button 
      className="btn btn-info"
      id="torneos"
      name="torneos"
      value={this.state.torneos}
      onClick={this.onClick}
    >Ver todos los torneos
    </button>
      <form  hidden={this.state.torneos}>

        <div id="tornoes">
	<div class="row">
		<div class="col-sm 12">
			<table class="table table-hover ">
				<thead>
					<tr  class="table-success">
						<th>
							Nombre
						</th>
						<th>
							Participantes
						</th>
						<th>
							Fecha
						</th>
						<th>
							Juego
						</th>
					</tr>
				</thead>
				<tbody>
					<tr  class="table-success">
						<td>
							Torneo 1
						</td>
						<td>
							30/30
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Counter Strike 1. 6
						</td>
					</tr>
					<tr  class="table-success">
						<td>
							Torneo 2
						</td>
						<td>
							30/30
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Age of empires 2
						</td>
					</tr>
					<tr class="table-success">
						<td>
						Torneo	3
						</td>
						<td>
							30/30
						</td>
						<td>
							02/04/2012
						</td>
						<td>
							League of leyends
						</td>
					</tr>
					<tr  class="table-success">
						<td>
							Torneo  4
						</td>
						<td>
							30/30
						</td>
						<td>
							03/04/2012
						</td>
						<td>
							Fifa
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
      {/* <div  className="col-sm-12 align-self-center text-center " id="Last10Selector">
       
        </div>
        <div> {this.state.register.map(this.renderRegister)} </div> */}
      </form>
      </div>
    );
  }
}
