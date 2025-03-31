import { RouterProvider } from "react-router-dom";
import router from './router/router';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { user_token } from "./store/actions/userActions";
import apiUrl from "./api";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      apiUrl.post('auth/token')
        .then(response => {
          console.log("Respuesta del token:", response.data);
          dispatch(user_token(response.data.user));
        })
        .catch(err => {
          console.log("Error verificando token:", err);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        });
    } else {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          dispatch(user_token(user));
        } catch (error) {
          console.error('Error parsing stored user:', error);
          localStorage.removeItem('user');
        }
      }
    }
  }, [dispatch]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
