import { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [countryData, setCountryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca3")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data fetched successfully");
        setCountryData(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error.message);
      });
  }, []);

  const filteredCountries = countryData.filter((country) =>
    country.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        data-testid="search-input"
        style={{ padding: "10px", margin: "20px", width: "300px" }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filteredCountries.length === 0 ? (
          <p data-testid="no-results">No results found</p>
        ) : (
          filteredCountries.map((country) => (
            <div
              key={country.cca3}
              className="countryCard"
              style={{
                width: "200px",
                height: "200px",
                border: "2px solid lightblue",
                borderRadius: "10px",
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <img
                src={country.flags?.png}
                alt={`Flag of ${country.name?.common}`}
                style={{ width: "130px", height: "100px" }}
              />
              <h2>{country.name?.common}</h2>
            </div>
          ))
        )}
      </div>
    </>
  );
}




// import { useEffect, useState } from "react";
// import "./style.css";

// export default function App() {
//   const [countryData, setCountryData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca3")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Data fetched successfully");
//         setCountryData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching countries:", error.message);
//       });
//   }, []);

//   const filteredCountries = countryData.filter((country) =>
//     country.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Search countries..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         data-testid="search-input"
//         style={{ padding: "10px", margin: "20px", width: "300px" }}
//       />

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {filteredCountries.length === 0 ? (
//           <p data-testid="no-results">No results found</p>
//         ) : (
//           filteredCountries.map((country) => (
//             <div
//               key={country.cca3}
//               data-testid="country-card"
//               style={{
//                 width: "200px",
//                 height: "200px",
//                 border: "2px solid lightblue",
//                 borderRadius: "10px",
//                 margin: "10px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 padding: "10px",
//               }}
//             >
//               <img
//                 src={country.flags?.png}
//                 alt={`Flag of ${country.name?.common}`}
//                 style={{ width: "130px", height: "100px" }}
//               />
//               <h2>{country.name?.common}</h2>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// }






// import { useEffect, useState } from "react";
// import "./style.css";

// export default function App() {
//   const [countryData, setCountryData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetch("https://xcountries-backend.azurewebsites.net/all")
//       .then((res) => res.json())
//       .then((data) => setCountryData(data))
//       .catch((error) => {
//         console.error("API Error:", error.message);
//       });
//   }, []);

//   const filteredCountries = countryData.filter((country) =>
//     country.name?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const container = {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const card = {
//     width: "200px",
//     height: "200px",
//     border: "2px solid lightblue",
//     borderRadius: "10px",
//     margin: "10px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "10px",
//   };

//   const flag = {
//     width: "130px",
//     height: "100px",
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Search for a country"
//         aria-label="country-search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ padding: "10px", margin: "20px", width: "300px" }}
//       />
//       <div style={container}>
//         {filteredCountries.length === 0 ? (
//           <p>No results found</p>
//         ) : (
//           filteredCountries.map((country) => (
//             <div key={country.code} style={card} data-testid="country-card">
//               <img
//                 src={country.flag}
//                 alt={`Flag of ${country.name}`}
//                 style={flag}
//               />
//               <h2>{country.name}</h2>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// }
