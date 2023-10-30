import React, { useState } from "react";
import SweetAlert2 from "react-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


const TareaFormulario = ({ crearTarea }) => {
    const [texto, setTexto] = useState("");
    const [error, setError] = useState(false);
    const [alerta, setAlerta] = useState(false);

    const handleChange = (e) => {
        setTexto(e.target.value);
        setError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim() === "") {
            setError(true);
            return;
        }
        crearTarea(texto);
        setTexto("");
        setAlerta(true);
    };

    return (
        <div>
            <h1 className="title">
                <svg xmlns="http://www.w3.org/2000/svg" className="heartIcon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Escribe una tarea..."
                    className="inputField"
                    value={texto}
                    onChange={handleChange}
                />
                <button className="addBtn">+</button>
            </form>
            {error ? (
                <span className="errorMsg">No puede crear una tarea sin texto!</span>
            ) : null}
            <SweetAlert2
                show={alerta}
                text="Tarea creada!"
                icon="success"
                iconColor="#646cff"
                background="#131313"
                backdrop="rgba(0,0,0,0.8)"
                
                confirmButtonText="Yippie"
                onConfirm={() => setAlerta(false)}
            />

        </div>
    );
};

export default TareaFormulario;
