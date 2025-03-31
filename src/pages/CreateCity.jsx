import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create_city } from '../store/actions/cityActions';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateCity = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        city: '',
        country: '',
        currency: '',
        language: '',
        image: '',
        description: ''
    });
    const [error, setError] = useState(''); // Estado para manejar errores

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resultAction = await dispatch(create_city(formData));
            if (create_city.fulfilled.match(resultAction)) {
                // Mostrar mensaje de éxito
                Swal.fire({
                    title: '¡Éxito!',
                    text: 'Ciudad creada correctamente',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                navigate('/my-cities'); // Redirigir a la lista de ciudades
            } else {
                setError(resultAction.error.message);
            }
        } catch (err) {
            setError('Error al crear la ciudad. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="w-full flex flex-col items-center p-6 rounded-lg shadow-md mt-20">
            <h2 className="text-3xl text-slate-200 font-bold mb-4 text-center">Create a New City</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Muestra el mensaje de error */}
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="mb-4">
                    <input
                        name="city"
                        onChange={handleInput}
                        placeholder="City Name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        name="country"
                        onChange={handleInput}
                        placeholder="Country"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        name="currency"
                        onChange={handleInput}
                        placeholder="Currency"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        name="language"
                        onChange={handleInput}
                        placeholder="Language"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        name="image"
                        onChange={handleInput}
                        placeholder="Image URL"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        name="description"
                        onChange={handleInput}
                        placeholder="Description"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Create City
                </button>
            </form>
        </div>
    );
};

export default CreateCity; 