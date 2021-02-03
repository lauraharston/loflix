import React from "react";
import { Spinner } from "reactstrap";

function Loading(props) {
    return(
        <Spinner type="grow" color="danger" style={{ width: '6rem', height: '6rem' }}/>
    )
 
}

export default Loading;
