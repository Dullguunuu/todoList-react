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
                    <hr />
                    <div className="form">
                        <div className="mb-3">
                            <label className="form-label" for="type">Хийгдэх ажил</label>

                            <input
                                id="task"
                                name: "task"
                            className="form-control"
                            type="text"
                            value={taskObj.task}
                            onChange={(e) => setTaskObj({ ...taskObj, task: e.target.value })}
                            placeholder="Таскаа оруулна уу"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input type="hidden" value={ } />
                                <button className="btn btn-primary" onClick={addTask}>
                                    +Add
                                </button>
                            </div>
                        </div>
                        <hr />

                    </div>
                    <div className="btn btn-light" onClick={setModal}>
                        Хаах
                    </div>
                </div>
            </div>
            )
}