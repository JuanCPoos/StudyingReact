import react from 'react';
import React, {Component} from 'react';

class MiComponente extends Component{

    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón Cocido'],
            calorias: 400
        };
        return (
            <React.Fragment>
            <h1>{'Rcta: ' + receta.nombre}</h1>
            <h2>{'Clrs: ' + receta.calorias}</h2>
            <ol>
                {
                    receta.ingredientes.map((ingrediente, i) => {
                        console.log(ingrediente);
                        return(
                            <li key={i}>
                                {ingrediente}
                            </li>
                        )
                    })
                }
            </ol>
            
            <hr />
            </React.Fragment>            
             
        );
    }
}

export default MiComponente;