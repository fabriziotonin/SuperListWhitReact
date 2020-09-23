import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Listado from './components/Listado';
import './App.css';

function App() {
  
  const [modificacion, setModificacion] = useState(false);
  const [producto, setProducto] = useState({
    id: '',
    nombre: '',
    cantidad: 1
  });
  const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) || []);

  return (
    <Fragment>
      <h1 className="text-center pt-3 pb-1">Lista del Super</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <Form
              producto={producto} setProducto={setProducto} 
              productos={productos} setProductos={setProductos}
              modificacion={modificacion} setModificacion={setModificacion}
            />
          </div>
          <div className="col">
            <Listado 
              producto={producto} setProducto={setProducto}
              productos={productos} setProductos={setProductos}
              setModificacion={setModificacion}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
