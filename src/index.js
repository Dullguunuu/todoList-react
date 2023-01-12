import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, { useState } from "react";

// import "./App.css";
// import LightSwitch from "./components/Light";
// import Modal from "./components/modal";
// import Signup from "./components/Signup";
// import Toolbar from "./components/Toolbar";

// //id, title, isDone
// function App() {
//   const [task, setTask] = useState(""); // input
//   const [tasks, setTasks] = useState([]);
//   const [ID, setId] = useState("0");
//   const [modal, setModal] = useState(false);

//   const [doneTotal, setDoneTotal] = useState(0);

//   const addTask = () => {
//     const newObj = {
//       id: createId(),
//       title: task,
//       isDone: false,
//     };

//     const newArr = [...tasks];

//     if (ID !== "0") {
//       newArr.map((e) => {
//         if (e.id === ID) {
//           e.title = task;
//         }
//         return e;
//       });
//     } else {
//       newArr.push(newObj);
//     }

//     // console.log(newObj);

//     setTasks(newArr);

//     setTask("");
//     setId("0");
//     setModal(false);
//   };

//   const onDoneTask = (id) => {
//     const objList = tasks.map((val) => {
//       if (val.id === id) {
//         console.log(val);

//         val.isDone = !val.isDone;

//         if (val.isDone) {
//           setDoneTotal(doneTotal + 1);
//         } else {
//           setDoneTotal(doneTotal - 1);
//         }
//       }
//       return val;
//     });

//     setTasks(objList);
//   };

//   const handleModal = () => {
//     setModal(!modal);
//   };

//   const handleEdit = (id, title, isDone) => {
//     if (!isDone) {
//       setTask(title);
//       setId(id);
//       setModal(true);
//     }
//   };

//   const handleDelete = (id) => {
//     const newArr = tasks.filter((e) => e.id !== id);
//     setTasks(newArr);
//   };

//   function createId() {
//     let abc = "ABCDEFJHJKLMNO";

//     let num = "1234567890";

//     console.log(Math.random(1 * 10));

//     let newStr =
//       abc.split("")[Math.floor(Math.random() * 10 + 1)] +
//       abc.split("")[Math.floor(Math.random() * 10 + 1)] +
//       abc.split("")[Math.floor(Math.random() * 10 + 1)];

//     let newNumber =
//       num.split("")[Math.floor(Math.random() * 10)] +
//       "" +
//       num.split("")[Math.floor(Math.random() * 10)] +
//       "" +
//       num.split("")[Math.floor(Math.random() * 10)];

//     console.log(newStr + newNumber);

//     return newStr + newNumber;
//   }

//   return (
//     <div className="container">
//       <div className="row mt-4">
//         {/* <Toolbar /> */}

//         {/*
//         <Signup /> 
//          <LightSwitch />
//          */}

//         <div className="col-md-4">
//           <h1>Todo List</h1>
//           Total {tasks.length}
//           <p>Done {doneTotal}</p>
//           <div className="d-flex gap-3">
//             {/* <input
//               id="HAH"
//               className="form-control"
//               type="text"
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//               placeholder="task oruulna uu"
//             />
//             <input type="hidden" value={ID} />
//             <button className="btn btn-primary" onClick={addTask}>
//               +Add
//             </button> */}
//             <button className="btn btn-primary" onClick={handleModal}>
//               Modal
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="row mt-3">
//         <div className="col-md-4">
//           {tasks.map((e) => (
//             <div className="d-flex justify-content-between align-items-center">
//               <div className="d-flex">
//                 <input
//                   type="checkbox"
//                   checked={e.isDone}
//                   onChange={() => onDoneTask(e.id)}
//                 />

//                 <h4>{e.title}</h4>
//               </div>
//               <div>
//                 <button
//                   className="btn btn-warning"
//                   onClick={() => handleEdit(e.id, e.title, e.isDone)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDelete(e.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         {modal && (
//           <Modal
//             modal={modal}
//             setModal={handleModal}
//             task={task}
//             id={ID}
//             setTask={setTask}
//             addTask={addTask}
//           // setTasks={setTasks}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
