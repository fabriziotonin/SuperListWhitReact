import React from 'react';

function Listado({ setProducto, productos,setProductos, setModificacion }) {
   
    const borrarProducto = (id) => {
        if(window.confirm('¿Esta seguro que desea borrar el producto?')){
            setProductos(productos.filter(producto => producto.id !== id))
        }
    }

    const modificarProducto = (id) => {
        console.log(id);
        setProducto(productos.find(producto => producto.id === id));
        setModificacion(true);
    }
    
    return (
        <>
        <h3>Listado de Productos</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map(producto => {
                        return(
                            <tr key={producto.id}>
                                <td>{ producto.nombre }</td>
                                <td>{ producto.cantidad }</td>
                                <td>
                                    <button type="button" className="btn btn-warning btn-sm mr-1" onClick={() => modificarProducto(producto.id)}>Modificar</button>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => borrarProducto(producto.id)}>Borrar</button>
                                </td>
                            </tr>
                        )
                    })
                }
                             
            </tbody>
        </table>
        </>
    ); 
}

export default Listado;