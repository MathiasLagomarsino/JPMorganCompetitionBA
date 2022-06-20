import React, { Component } from 'react'
import image from '../sample/image.png'

export default class Lautaro extends Component {
    render() {
        return (
            <div>
                 <div  class="col-4" id="ranking">
                 <label  htmlFor="Tipo" ><strong>{"Ver Rankings :  "} </strong> </label>
               <select  required="required" id="Tipo"  name="Tipo" placeholder="Seleccione una opcion" >
                 <option value="">Ranking Global </option>
                   <option value="in">Ranking Fifa </option>
                   <option value="eg">Ranking Counter </option>
                   <option value="at">Ranking Age </option>
                   <option value="ar">Ranking League </option>
                   </select>


            </div> 
                
    <div class="container">
      <div class="row align-items-start">
        <div class="col justify-content-center">
          <h4 class="torneo-titulo">Torneo patronato de la infancia</h4>
          <h5 class="torneo-juego">Counter Strike</h5>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-4">
          <img class="torneo-info-imagen" src={image}/>
        </div>
        <div class="col-8">
          <p class="torneo-info-informacion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
        </div>
       
      </div>
    </div>
            </div>
        )
    }
}
