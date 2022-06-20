import React, { Component } from 'react'
import axios from 'axios'
const api = axios.create({ baseURL: `patronatoinfantil.herokuapp.com` });

export default class Formapp extends Component {
      
   constructor(args){
       super(args)
       
       this.state ={
        
        usuario: "",
        juego: "",
        torneo:"",
        Tipo:"",
        acept:  "",
        message:"",
        NewLog:true,
        NewLogTextButton:"Quiere inscribirse a un nuevo torneo",
        NewLogColorButton:"btn btn-info",     
   }}

  onSubmit= e =>{
    if (this.state.acept===true){
    api.post(`/torneo/ingresar`,{
         
        usuario: this.state.usuario,
        juego:this.state.juego,
        torneo:this.state.torneo,
       
        
    })
this.setState({usuario: "",
juego: "",
torneo:"",
Tipo:"",
acept:  "",})}
      e.preventDefault();
  } 
   save(e){
       if(!this.validate()){
        return;
       }
       this.setState({
       message: "El jugador "+this.state.usuario+ " fue agregado correctamente le llegara un mail para inidicarle el horario y los pasos"
    })
    
   }
   handleInputChangeNormal(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });}
   validate(){
       if(this.state.acept !== true){
           this.setState({
            
                   message:"Acepte los terminos"
               })
               return false
           }
           return true
       }
    
    onClickForm = () =>{
    if(this.state.NewLog===false){
        this.setState({NewLog:true,NewLogTextButton:"Quiere Incribirse a un torneo?",
        NewLogColorButton: "btn btn-info"})
    }else{this.setState({NewLog:false,
   NewLogTextButton:"Ocultar Formulario",
    NewLogColorButton: "btn btn-danger"})}}
    
    
    render() {
        return (
            <div>
            <div className="col-sm-12 align-self-center text-center" onClick={this.onClickForm}><button className={this.state.NewLogColorButton}>{this.state.NewLogTextButton} </button></div>
           <form  hidden={this.state.NewLog} onSubmit={this.onSubmit}>

           <div id="Lista" className="container-sm ">
             <div className="row">
            <h2  className="col-sm-12 align-self-center text-center ">A que juego le gustaria jugar?</h2>
             </div>
             <div className="row">
            <div className="col-sm-12 align-self-center text-center ">
            {" "}
               <label htmlFor="usuario">Nombre de usuario: .</label>
               <input name="usuario" id="usuario"
                type="text" value={this.state.usuario} 
                onChange={this.handleInputChangeNormal.bind(this)}
                required="required"/>
            </div>
            </div>
            <div className="row">
      <div className="col-sm-12 align-self-center text-center">
            {" "}
               <label htmlFor="juego" >juego: . </label>
               <input  id="juego" 
               type="text"  
               onChange={this.handleInputChangeNormal.bind(this)}
               value={this.state.juego}
               name="juego" required="required"/>
               <br/>
               </div>
               </div>
            <div className="row">
               <div className="col-sm-12 align-self-center text-center">
            {" "}
               <label > torneo: .</label>
               <input htmlFor="torneo" id="torneo" 
               type="text" required="required" name="torneo" onChange={this.handleInputChangeNormal.bind(this)}
               value={this.state.torneo}/>
               <br/>
               </div>
               </div>
            <div className="row">
               <div className="col-sm-12 align-self-center text-center">
            {" "}
               <br/>
               <input type="checkbox" id="acept" name="acept" value={this.state.acept} onChange={this.handleInputChangeNormal.bind(this)}/>
                <label  htmlFor="acept">Acepta los terminos  .</label><br></br>
                </div>
                </div>
            <div className="row">
                <div className="col-sm-12 align-self-center text-center">
            {" "}
               <button required="required" type="submit" className="btn btn-primary" onClick={this.save.bind(this)}> Guardar Cambios</button>
               
        <span style={{color:"green"}}>{this.state.message}</span>
               <br/>
               </div>
               </div>
               </div>
          </form>
        
            </div>
        )
    }
}
