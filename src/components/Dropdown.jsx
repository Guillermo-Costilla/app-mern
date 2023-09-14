import '../styles/itinerary.css'


const CountryDropdown = ({ countrys, onChange }) => {
    return (
        <div className="relative inline-block w-48 card">
            <select name="country"
                onChange={onChange}
                className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                {countrys.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </select>

        </div>
    );
};

export default CountryDropdown;
