import './App.css';
import { useState } from "react"
import Modal from './components/Modal';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [doneTotal, setDoneTotal] = useState(0);

  const addTask = () => {
    const newObj = {
      id: tasks.length,
      title: task,
      isDone: false,
    };

    const newArr = [...tasks]
    newArr.push(newObj);

    setTasks(newArr);



    setTask("");
  }
  const onDoneTask = (id) => {
    const objList = tasks.map((val) => {
      if (val.id === id) {
        val.isDone = !val.isDone;
      }
      return val;
    })
    setTasks(objList)
    showDoneTotal()
  }

  function showDoneTotal() {
    const arr = tasks.filter((e) => e.isDone === true)
    setDoneTotal(arr.length)
  }

  function editTask(value) {

  }

  function deleteTask(id) {
    const spliceHiih = [...tasks]
    if (tasks.id == id) {
      spliceHiih.splice(id, 1)
    }
    setTasks(spliceHiih)
  }

  console.log(tasks)
  return (
    < div className='container' >
      <div className='row mt-4'>
        <div className='col-md-4'>
          <h1>To do List</h1>
          <div className='d-flex justify-content-between'>
            <div>Total: {tasks.length}</div>
            <div>Checked: {doneTotal}</div>
          </div>
          <div className='d-flex gap-3'>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Таскаа оруулна уу' />
            <button className='btn btn-primary' onClick={addTask}>Нэмэх</button>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-4'>
          {
            tasks.map((e) => (
              <div className='d-flex justify-content-between align-items-center mb-2'>
                <div className='d-flex gap-1'>
                  <input type="checkbox" checked={e.isDone} onChange={() => onDoneTask(e.id)} />
                  <h4>{e.title}</h4>
                </div>
                <div className='d-flex gap-3'>
                  <button className="btn btn-warning" onClick={() => editTask(e.value)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => deleteTask(e.id)}>Delete</button>
                </div>
              </div>
            ))
          }
        </div>
        <Modal
          modal={modal}
          setModal={handleModal}
          task={task}
          id={ID}
          setTask={setTask}
          addTask={addTask}
        // setTasks={setTasks}
        />
      </div>
    </div >
  );
}

export default App;
