import React, { Fragment, useEffect } from 'react';

function Form({producto, setProducto, productos, setProductos, modificacion, setModificacion}) {
    
    useEffect(() => {
        setProducto({ ...producto, id: generarId()});
    }, []);

    useEffect(() => {
        localStorage.setItem('productos',JSON.stringify(productos));
    }, [productos]);

    const handleChange = (event) => {
        setProducto({
            ...producto,
            [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Validar los campos
        if(producto.nombre === ""){
            alert('Ingrese nombre del producto');
            return;
        }

        if(producto.cantidad < 1){
            alert('Ingrese una cantidad');
            return;
        }

        if(!modificacion){
            // Agregar producto al arreglo
            setProductos([ ...productos, producto]);
        } else {
            // Modificar producto
            setProductos([ ...productos.filter(prod => prod.id !== producto.id), producto ]);
            setModificacion(false);
        }


        // Limpiar formulario
        setProducto({
            id: generarId(),
            nombre: '',
            cantidad: 1
        });
    }

    const generarId = (length = 20) => {
        var id = '';
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var caracteresLength = caracteres.length;
        for (var i = 0; i < length; i++) {
            id += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
        }
        return id;
    }

   
    return (
        <Fragment>
            <h3>{ modificacion ? 'Modificar' : 'Agregar'} Producto</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Producto</label>
                    <input type="text" className="form-control" name="nombre" id="nombre" value={producto.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" className="form-control" name="cantidad" id="cantidad" min="1" step="1" value={producto.cantidad} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">{ modificacion ? 'Modificar' : 'Agregar'}</button>
            </form>
        </Fragment>
    ); 
}

export default Form;