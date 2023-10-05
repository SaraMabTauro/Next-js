import React, { useEffect, useState } from 'react';

const RegionList = () => {
  const [regiones, setRegiones] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/api/regiones';  // Cambia la URL según tu configuración del servidor Express

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRegiones(data.regiones))
      .catch((error) => console.error('Error fetching regiones:', error));
  }, []);

  return (
    <ul>
      {regiones.map((region, index) => (
        <li key={index}>
          {region}
        </li>
      ))}
    </ul>
  );
};

export default RegionList;
