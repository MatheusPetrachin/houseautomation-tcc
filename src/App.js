import logo from './logo.svg';
import novaimagem from "./images/planta.png"
import './App.css';
import axios from 'axios';

const App = () => {

  const chamarAPI = (room) => {
    axios.post('http://' + localStorage.getItem("houseIP") + '/' + room + states(room), null)
  }

  const setIP = (newIP) => {
    console.log(newIP)
    localStorage.setItem("houseIP",newIP);
  }

  const states = (room) => {
    var state = localStorage.getItem(room)
    switch (state) {
      case "ON":
        localStorage.setItem(room, "OF");
        return "OFF";
      case "OF":        
        localStorage.setItem(room, "ON");
        return "ON";
      default:
        localStorage.setItem(room, "ON");
        return "ON";
        break;
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={novaimagem} usemap="#planetmap"></img>
        <>
        <map id="planetmap" name="planetmap" >

          <input type="text" onBlur={(e) => setIP(e.target.value)} />

        <area shape="rect" coords="8,36,176,299" alt="suite" id="suite" onClick={() => chamarAPI("suite")} class="grab"/>
        <area shape="rect" coords="179,4,343,233" alt="escritorio" id="escritorio"  onClick={() => chamarAPI("escritorio")} class="grab" />
        <area shape="rect" coords="181,234,343,299" alt="corredor" id="corredor" onClick={() => chamarAPI("corredor")} class="grab"/>
        <area shape="poly" coords="347,236,
                                    516,236,
                                    516,339,
                                    540,339,
                                    537,382,
                                    348,382" alt="copa" id="copa" onClick={() => chamarAPI("copa")} class="grab"/>        
        <area shape="rect" coords="347,80,512,236" alt="sala" id="sala" onClick={() => chamarAPI("sala")} class="grab"/>
        <area shape="rect" coords="347,2,512,75" alt="varanda" id="varanda" onClick={() => chamarAPI("varanda")} class="grab"/>
        <area shape="rect" coords="518,8,626,338" alt="cosinha" id="cosinha" onClick={() => chamarAPI("cosinha")} class="grab"/>
        <area shape="rect" coords="10,304,176,381" alt="banh_suite" id="banh_suite" onClick={() => chamarAPI("banh_suite")} class="grab"/>
        <area shape="rect" coords="183,304,339,381" alt="banh_suite" id="banh_suite" onClick={() => chamarAPI("banh_suite")} class="grab"/>
        </map>        
        </>
      </header>
    </div>
  );
}

export default App;
