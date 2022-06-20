import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Last10 from './components/listado'
import Formapp from './components/form'
import WebTools from './components/WebTools'
import axios from "axios";
import Navbar from './components/navbar'
import Lautaro from './components/lautaro'
function App() {
  return (
    <div className="App">
      
<div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
      <Navbar/>
     <Lautaro/>
       
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12" style={{marginTop:"2%"}}>
        
        <WebTools/>
       <Formapp/>
      </div>
      <Last10/>
    
    </div>
    
    <button id="donate" className="btn btn-success"> Donaciones  </button>
    <button id="chat" className="btn btn-info"> Chat  </button>
    </div>
  </div>
    
  );
}

export default App;
