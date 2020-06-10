import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const ENDPOINT = 'https://api.giphy.com/v1/gifs/search?';
  const API_KEY = '';

  const [text, setText] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  // Si el segundo parámetro (arreglo) está vacío significa que el useEffect se ejecuta cuando el componente se monta.
  // Es útil cuando quiero obtener información (DB, API, etc) antes de mostrar el componente
  useEffect(() => {

  }, []);

  // Le puedo colocar también elementos de nuestro estado
  // En este caso, se ejecuta cada que el valor de text cambie
    // Paso 1: Escribo en el input y éste ejecuta la función handleChange
    // Paso 2: setText adquiere el valor del input y se ejecuta el siguiente useEffect
    // Paso 3: se genera la petición al API de Giphy
  useEffect(() => {
    axios.get(`${ENDPOINT}api_key=${API_KEY}&q=${text}&limit=3`)
      .then((response) => setGifs(response.data.data))
      .catch((error) => alert(error));
  }, [text]);


  return (
    <div className="app">
      <h1 className="text-center font-weight-bolder my-4 display-2">GIFS</h1>
      <div className="container">
        <div className="input-group input-group-lg">
          <input type="text" className="form-control" onChange={handleChange} placeholder="Ingresa un texto"/>
        </div>
        <div className="row">
          { gifs.map((gif) => <Card key={gif.id} image={gif.images.preview_gif.url} title={gif.title} url={gif.url}/>) }
        </div>
      </div>
    </div>
  );
}

export default App;
