let apiUrl = 'http://localhost:5000/api/';

if (process.env.NODE_ENV==='production') {
    apiUrl = import.meta.env.VITE_APP_BACK_URL
}

export default apiUrl;