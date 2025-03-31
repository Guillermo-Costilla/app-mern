import axios from 'axios';

let apiUrl = axios.create({
  baseURL: 'http://localhost:4000/api' // Cambia por tu URL
});

// Cambia la baseURL si está en modo producción
if (import.meta.env.MODE === 'production') {
  apiUrl = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BACK_URL}/api`
  });
}
console.log(import.meta.env.VITE_APP_BACK_URL)

// Lista de endpoints que no requieren autenticación
const publicEndpoints = ['cities', 'auth/signin', 'auth/signup', '']; // Agrega tus endpoints públicos aquí

// Interceptor para incluir el token JWT
apiUrl.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  
  // Verifica si la URL de la solicitud está en la lista de endpoints públicos
  const isPublicEndpoint = publicEndpoints.some(endpoint => config.url.includes(endpoint));

  if (token && !isPublicEndpoint) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

export default apiUrl;