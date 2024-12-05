// Esta función se utiliza para crear una instancia del cliente de Supabase.
import { createClient } from '@supabase/supabase-js';

// Recuperamos la URL de Supabase desde las variables de entorno definidas en el archivo `.env`.
// `import.meta.env` es una característica de Vite que permite acceder a las variables de entorno en tiempo de compilación.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// Recuperamos la clave anónima (anon key) desde las variables de entorno.
// Esta clave es necesaria para interactuar con la API de Supabase y autenticar solicitudes.
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Creamos una instancia del cliente de Supabase utilizando la función `createClient`.
// Este cliente se configura con la URL de Supabase y la clave anónima.
// `supabase` será el objeto principal para interactuar con la base de datos y la autenticación de Supabase.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Exportamos el cliente para que pueda ser utilizado en otros archivos de la aplicación.
// Con esta instancia, podemos realizar operaciones como registro, login, consultas y actualizaciones en la base de datos.
