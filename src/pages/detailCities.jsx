import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDetail from "../components/CardDetail.jsx";

const CityDetails = () => {
    const { id } = useParams();
    const [city, setCity] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/cities/${id}`)
            .then(response => setCity(response.data.city))
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div>
            {city && (
                <CardDetail {...city} itineraries={city.itineraries} />
            )}
        </div>
    );
};

export default CityDetails;