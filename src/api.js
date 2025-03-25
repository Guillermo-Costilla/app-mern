let apiUrl = 'http://localhost:5000/api/';

if (import.meta.env.MODE === 'production') {
    apiUrl = import.meta.env.VITE_APP_BACK_URL;
}

export default apiUrl;