import React, { useState, useEffect } from "react";
import { List } from "./list";
import { Input } from "./input";

export const App = () => {
    const [state, setState] = useState({
        lenguajes: [
            { id: 1, nombre: "JavaScript", estado: "" },
            { id: 2, nombre: "Java", estado: "" },
            { id: 3, nombre: "PHP", estado: "" },
            { id: 4, nombre: "Python", estado: "" },
            { id: 5, nombre: "C#", estado: "" },
            { id: 6, nombre: "C++", estado: "" },
            { id: 7, nombre: "Ruby", estado: "" },
            { id: 8, nombre: "CSS", estado: "" },
            { id: 9, nombre: "C", estado: "" },
            { id: 10, nombre: "Objective C", estado: "" },
            { id: 11, nombre: "Perl", estado: "" },
            { id: 12, nombre: "Shell", estado: "" },
            { id: 13, nombre: "R", estado: "" },
            { id: 14, nombre: "Scala", estado: "" },
            { id: 15, nombre: "Go", estado: "" },
            { id: 16, nombre: "Haskell", estado: "" },
            { id: 17, nombre: "Matlab", estado: "" },
            { id: 18, nombre: "Swift", estado: "" },
            { id: 19, nombre: "Clojure", estado: "" },
            { id: 20, nombre: "Groovy", estado: "" },
            { id: 21, nombre: "Visual Basic", estado: "" }],
        clase: "bg-warning",
        activo: null,
        input: "",
    })

    const seleccion = (e) => {
        if (state.activo !== null) {
            state.activo.classList.remove(state.clase)
        }
        e.target.classList.add(state.clase);

        setState({
            ...state,
            activo: e.target
        })
    }


    const filtrar = (e) => {

        let data = {
            input: e.target.value
        }
        setState((prevState) => {

            return { ...prevState, ...data }
        })


    }



    return (<>
        <div className="cointainer ">
            <div className="row ">
                <div className="col-md ">
                    <Input filtrar={filtrar} />
                    <ul className="list-group">
                        {
                            state.lenguajes.length === 0 ? (
                                <h1 className="text-center">No hay nada que mostrar</h1>
                            ) : (
                                    state.lenguajes.filter((lenguaje) => {
                                        return lenguaje.nombre.toLowerCase().includes(state.input)
                                    }).map((ele, i) => {
                                        return <List key={i} {...ele} seleccion={seleccion} />
                                    })
                                )
                        }

                    </ul>
                </div>
            </div>

        </div>
    </>)
}







