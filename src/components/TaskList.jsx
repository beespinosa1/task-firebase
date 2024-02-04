import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import './TaskList.css';  // Importar el archivo de estilos

const TaskList = ({ firebaseApp }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Obtener referencia a la base de datos de Firebase
    const db = getDatabase(firebaseApp);
    const tasksRef = ref(db, 'tasks');

    // Escuchar cambios en la base de datos y actualizar la lista de tareas
    const unsubscribe = onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const taskList = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        setTasks(taskList);
      } else {
        setTasks([]);
      }
    });

    // Devolver una función de limpieza al desmontar el componente
    return () => {
      unsubscribe(); // Detener la escucha cuando el componente se desmonta
    };
  }, [firebaseApp]);

  async function deleteTask(id) {
    const db = getDatabase(firebaseApp);
    const tasksRef = ref(db, 'tasks');
  
    try {
      // Imprimir la lista de tareas antes de la eliminación
      console.log('Tasks before deletion:', tasks);
  
      // Eliminar la tarea de la base de datos
      await remove(ref(tasksRef, id));
  
      // Actualizar la lista después de la eliminación
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  
      // Imprimir la lista de tareas después de la eliminación
      console.log('Tasks after deletion:', tasks);
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  }
  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th className="task-column">Task</th>
            <th className="action-column">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="task-column">{task.title}</td>
              <td className="action-column">
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TaskList.propTypes = {
  firebaseApp: PropTypes.object.isRequired,
};

export default TaskList;
