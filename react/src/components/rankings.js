import React, { Component } from 'react'

export default class Rankings extends Component {
    render() {
        return (
            <div>
                 <label  htmlFor="Tipo" >Tipo: .</label>
               <select  required="required" id="Tipo"  name="Tipo" placeholder="Seleccione una opcion"/ >
                 <option value="">Ranking Global </option>
                   <option value="in">Ranking Fifa </option>
                   <option value="eg">Ranking Counter </option>
                   <option value="at">Ranking Age </option>
                   <option value="ar">Ranking League </option>


            </div> 
        )
    }
}
