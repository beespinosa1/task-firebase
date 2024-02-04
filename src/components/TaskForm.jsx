import { useState } from 'react';
import PropTypes from 'prop-types';
import { getDatabase, ref, push } from 'firebase/database';

const TaskForm = ({ firebaseApp }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    // Obtener referencia a la base de datos de Firebase
    const db = getDatabase(firebaseApp);

    try {
      // Agregar la tarea a la base de datos
      const tasksRef = ref(db, 'tasks');
      const newTaskRef = push(tasksRef, { title });

      // Puedes obtener el ID de la nueva tarea si es necesario
      const newTaskId = newTaskRef.key;

      setTitle('');
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

TaskForm.propTypes = {
  firebaseApp: PropTypes.object.isRequired,
};

export default TaskForm;
