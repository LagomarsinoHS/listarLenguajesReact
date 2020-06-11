import React from "react"

export const Input = (props) => {
    return (
        <div className="row ">
            <div className="col-md mt-3 ">
                <div className="input-group mb-3 col-md-6 mx-auto">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-success">Buscar</span>
                    </div>
                    <input type="text" name="AquiAgrego" className="form-control" onChange={(e) => props.filtrar(e)} />
                </div>
            </div>
        </div>
    )
}



