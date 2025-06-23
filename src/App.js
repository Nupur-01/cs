import { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [countryData, setCountryData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countryData.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="body">
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search for Countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <div key={country.cca3} className="countryCard">
              <img
                src={country.flags.png}
                className="flag"
                alt={`Flag of ${country.name.common}`}
              />
              <h2>{country.name.common}</h2>
            </div>
          ))
        ) : (
          <div>No countries found</div>
        )}
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [countries, setCountries] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries');
//         const data = await response.json();
//         setCountries(data);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const filteredCountries = countries.filter(
//     (country) =>
//       typeof country.name === 'string' &&
//       country.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
//   );

//   return (
//     <div className="container">
//       <input
//         type="text"
//         placeholder="Search for a country..."
//         className="searchBar"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className="countriesGrid">
//         {filteredCountries.map((country) => (
//           <div className="countryCard" key={country.name}>
//             <img src={country.flag} alt={`Flag of ${country.name}`} />
//             <p>{country.name}</p>
//           </div>
//         ))}
//       </div>

//       {filteredCountries.length === 0 && (
//         <p className="noResult">No countries match your search.</p>
//       )}
//     </div>
//   );
// }

// export default App;
