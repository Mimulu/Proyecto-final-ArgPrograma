import React, { useState, useEffect } from "react";
import Tarea from "./task";
import TareaFormulario from "./form";
import Swal from 'sweetalert2';




const TaskList = () => {
    const [tareas, setTareas] = useState(
        JSON.parse(localStorage.getItem("tareas")) || []
    );

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    const crearTarea = (texto) => {
        const nuevaTarea = {
            id: Date.now(),
            texto: texto,
            completada: false,
        };
        setTareas([...tareas, nuevaTarea]);
    };

    const eliminarTarea = (id) => {
   Swal.fire({
        text: "¿Estás seguro de que deseas eliminar esta tarea? (No podrás recuperarla)",
        icon: 'warning',
        showCancelButton: true,
        iconColor: "#646cff",
        background: "#131313",
        backdrop: "rgba(0,0,0,0.8)",
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
            setTareas(nuevasTareas);
        }
      })
    }


    const completarTarea = (id) => {
        const nuevasTareas = tareas.map((tarea) =>
            tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        );
        setTareas(nuevasTareas);
    };

    return (
        <div className="taskLContainer">
            <TareaFormulario crearTarea={crearTarea} />
            <ul className="taskList">
                {tareas.map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        eliminarTarea={eliminarTarea}
                        completarTarea={completarTarea}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;