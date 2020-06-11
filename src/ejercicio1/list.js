import React from "react";

export const List = (props) => {

    return (<>
        <li id="false" className={`list-group-item list-group-item-action`} onClick={(e) => props.seleccion(e)}>
            {`${props.id} - ${props.nombre}`}</li>

    </>)
}