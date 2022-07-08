
import './App.css';
import html2canvas from 'html2canvas';
import { useState } from 'react';

function App() {

const [linea1, setLinea1] = useState('');
const [linea2, setLinea2] = useState('');
const [imagen, setImagen] = useState('');

const onChangeLinea1 = function(evento){
setLinea1(evento.target.value)
}

const onChangeLinea2 = function(evento){
  setLinea2(evento.target.value)
}

const onChangeImagen = function(evento){
  setImagen(evento.target.value)
}

const onClickExportar = function(evento){
  alert('Seguro que desea descargar la imagen?')
  html2canvas(document.querySelector("#meme")).then(canvas => {
    var img = canvas.toDataURL('image/jpg')

      var link = document.createElement('a');
      link.download = 'meme.jpg';
      link.href = img;
      link.click();
    
});

}

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">
          Casa en Llamas
        </option>
        <option value="futurama">
          Futurama
        </option>
        <option value="history">
          History Channel
        </option>
        <option value="philosoraptor">
          Philosoraptor
        </option>
        <option value="smart">
          Smart Guy
        </option>
      </select><br/>

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/> <br/>
      <button onClick={onClickExportar}>Exportar</button>

      <div id='meme'>
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src={"/img/"+ imagen +".jpeg"}/>
        

        
      </div>

      <div>
        <h3>Hecho con ❤️ x Julian Fernandez</h3>
      </div>
      

    </div>
  );
}

export default App;
