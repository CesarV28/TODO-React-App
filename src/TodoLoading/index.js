import React from "react";

import './TodoLoading.css'

function TodoLoading() {

    return (
        <div className="spinner-container">
            <div className="spinner"></div> 
            <p>Cargando...</p>
        </div>
    );
}

export { TodoLoading };