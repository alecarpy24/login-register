import { supabase } from '../services/supabaseClient'; // Cliente de Supabase para manejar autenticación
import { useState, useEffect } from 'react'; // Hooks de React para manejar estados y efectos

const LogOut = () => {
  // Estado local para almacenar la información del usuario autenticado
  const [user, setUser] = useState(null);

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Función asíncrona para obtener los datos del usuario actual
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser(); // Obtiene el usuario autenticado desde Supabase
      setUser(data.user); // Actualiza el estado con la información del usuario
    };
    fetchUser(); // Llama a la función fetchUser cuando el componente se monta
  }, []); // El array vacío asegura que esto solo ocurra una vez, al montar el componente

  // Función para cerrar sesión
  const handleLogout = async () => {
    await supabase.auth.signOut(); // Llama a la función de Supabase para cerrar sesión
    setUser(null); // Limpia el estado del usuario, indicando que ya no está autenticado
  };

  return (
    <div>
      {/* Si el usuario está autenticado, muestra un saludo y el botón para cerrar sesión */}
      {user ? (
        <div>
          <p>Bienvenido, {user.email}</p> {/* Muestra el correo del usuario autenticado */}
          <button onClick={handleLogout}>Cerrar Sesión</button> {/* Botón que llama a handleLogout */}
        </div>
      ) : (
        // Si no hay usuario autenticado, muestra un mensaje indicativo
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export { LogOut }; // Exporta el componente para ser utilizado en otras partes de la aplicación
