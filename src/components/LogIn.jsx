import { supabase } from '../services/supabaseClient'; // Importa el cliente de Supabase
import { useState } from 'react'; // Hook de React para manejar estados

const LogIn = () => {
  // Estados locales para capturar los datos ingresados por el usuario y mostrar mensajes
  const [email, setEmail] = useState(''); // Guarda el email ingresado
  const [password, setPassword] = useState(''); // Guarda la contraseña ingresada
  const [message, setMessage] = useState(''); // Muestra mensajes de error o éxito

  // Función que se ejecuta al hacer clic en el botón "Iniciar Sesión"
  const handleLogin = async () => {
    // Llama a la función de Supabase para iniciar sesión con correo y contraseña
    const { data, error } = await supabase.auth.signInWithPassword({
      email, // Email ingresado por el usuario
      password, // Contraseña ingresada por el usuario
    });

    // Si ocurre un error, actualiza el estado 'message' con el mensaje del error
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      // Si el inicio de sesión es exitoso, muestra un mensaje de éxito
      setMessage('Inicio de sesión exitoso');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {/* Campo de entrada para el correo electrónico */}
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email} // El valor actual del input está sincronizado con el estado 'email'
        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado 'email' cuando el usuario escribe
      />
      {/* Campo de entrada para la contraseña */}
      <input
        type="password"
        placeholder="Contraseña"
        value={password} // El valor actual del input está sincronizado con el estado 'password'
        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado 'password' cuando el usuario escribe
      />
      {/* Botón para iniciar sesión */}
      <button onClick={handleLogin}>Iniciar Sesión</button>
      {/* Muestra un mensaje de error o éxito si existe */}
      {message && <p>{message}</p>}
    </div>
  );
};

export { LogIn }; 
