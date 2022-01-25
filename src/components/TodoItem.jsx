import React from 'react'

export function TodoItem({todo, cambiarEstado}){

    const {id, task, titulo,  completed} = todo;

    const fnCambiarEstado = () => {
        cambiarEstado(id);
    }

    const eliminar = (id) => {
         console.log("Eliminar "+id);
      
        }




    return  <div className="postit">
                <div className="card text-white bg-warning mb-3" Style="max-width: 18rem;">
                    <div className="card-header">{titulo}
                        <button className="x" onClick={ () => eliminar(id) }>X</button> 
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">{task}.</p>
                    </div>
                </div>
            </div>



}

