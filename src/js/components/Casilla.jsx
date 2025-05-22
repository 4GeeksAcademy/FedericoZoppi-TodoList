import React, { useState } from "react";

export const Casilla = () => {
    const [tarea, setTarea] = useState("");
    const [lista, setLista] = useState([]);
    const [text,setText] = useState("No hay tareas, añadir tareas")

   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarea.trim() !== "") {
            setLista([...lista, tarea]);
            setTarea("");
        }
    };

    const handleDelete = (idx) => {
        setLista(lista.filter((_, i) => i !== idx));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 text-center">
                <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fw-bold"
                    style={{ fontSize: "2.5rem" }}
                >
                    Lista
                </label>
                <input
                    placeholder="Escribe tu tarea aqui"
                    type="text"
                    className="form-control"
                    value={tarea}
                    onChange={(e) => setTarea(e.target.value)}
                />
            </div>
            <ul className="list-group">
                {lista.map((item, idx) => (
                    <li
                        key={idx}
                        className="list-group-item d-flex justify-content-between align-items-center tarea-item"

                    >
                        {item}
                        <button
                            type="button"
                            className="btn btn-danger btn-sm eliminar-btn"
                            style={{ display: "none" }}
                            onClick={() => handleDelete(idx)}
                        >
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-3 text-center text-secondary">
    {lista.length === 0
        ? "No hay tareas, añadir tareas"
        : `Tareas pendientes: ${lista.length}`}
</div>

        </form>
    );
};