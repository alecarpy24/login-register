import { supabase } from '../services/supabaseClient'; // Importa el cliente de Supabase para usar sus servicios
import { useState } from 'react'; // Hook para manejar estados locales en el componente

const SignUp = () => {
  // Estados locales para guardar email, contraseña y mensajes informativos de supabase
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Maneja el registro de un usuario en Supabase
  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password }); // Llama a la API de registro
    //data: Información sobre el resultado de la operación 
    //error: Información que devuelve si hay un error y cuál puede ser
    if (error) {
      setMessage(`Error: ${error.message}`); // Muestra un mensaje si ocurre un error
    } else {
      setMessage('Usuario registrado correctamente'); // Confirma el registro exitoso
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      {/* Input para el email */}
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Input para la contraseña */}
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Botón que ejecuta la función de registro */}
      <button onClick={handleSignUp}>Registrarse</button>
      {/* Mensaje informativo para el usuario */}
      {message && <p>{message}</p>}
    </div>
  );
};

export { SignUp };
