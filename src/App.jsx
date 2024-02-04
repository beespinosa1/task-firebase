import React from 'react';
import { initializeApp } from 'firebase/app';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './index.css';

// Configurar el cliente Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <div>
      <Navbar firebaseApp={app} />
      <div className="content-container">
        <TaskForm firebaseApp={app} />
        <TaskList firebaseApp={app} />
      </div>
    </div>
  );
};
export default App;
