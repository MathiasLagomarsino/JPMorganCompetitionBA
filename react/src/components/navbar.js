import React, { Component } from 'react'
import logoavatar from '../sample/logoavatar.PNG'
import onglogo from '../sample/onglogo.PNG'
import busqueda from '../sample/busqueda.PNG'


export default class Navbar extends Component {
    render() {
        return (

            <div class="row" id="nav">
                <div className="col sm-3">
                    <img class="logo" src={onglogo} />
                    <button type="button">Mensajes</button>
                 
                </div>
                <div className="col sm-2">

                </div>
                <div className="col sm-9" >
                    <div className="row"><div><input type="text" class="search" placeholder="Buscar torneo,amigos,etc:" /></div><div> <img class="user " src={logoavatar} /> <img class="logo" src={busqueda} /></div></div>
                    
                </div>
            </div>

        )
    }
}
