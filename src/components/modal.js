import React from "react";

export default function Modal({ setModal, modal, id, task, setTask, addTask }) {
    const dn = modal ? "block" : "none";
    return (
        <div className="modal" style={{ display: dn }} onClick={{ setModal }}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h2>Засах</h2>
                </div>
                <div className="w-100">
                    <input id="HAH"
                        className="form-control"
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Таскаа оруулна уу"
                    />
                    <input type="hidden" value={id} />
                    <button className="btn btn-primary" onClick={addTask}>
                        +Add
                    </button>
                    <hr />
                </div>
                <div className="btn btn-light" onClick={setModal}>
                    Хаах
                </div>
            </div>
        </div>
    )
}