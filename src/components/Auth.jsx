// Auth.jsx
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, FacebookAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';

const Auth = ({ firebaseApp }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);

    // Configurar un listener para detectar cambios en la autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Limpiar el listener al desmontar el componente
    return () => unsubscribe();
  }, [firebaseApp]);

  const handleSignInWithFacebook = async () => {
    const auth = getAuth(firebaseApp);
    const provider = new FacebookAuthProvider();

    try {
      // Iniciar sesión con el proveedor de Facebook
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Facebook:', error.message);
    }
  };

  const handleSignOut = async () => {
    const auth = getAuth(firebaseApp);

    try {
      // Cerrar sesión
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Hola, {user.displayName}!</p>
          <button onClick={handleSignOut}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={handleSignInWithFacebook}>Iniciar sesión con Facebook</button>
      )}
    </div>
  );
};

export default Auth;
