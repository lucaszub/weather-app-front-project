// Linechart.js
import React, { useState, useEffect } from 'react';
import './selectDepartement.css';

const SelectDepartement = ({setDepartement}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartement, setSelectedDepartement] = useState('Aucun département sélectionné');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:8000/departments/departements/`);
        const result = await response.json();
        console.log('API response:', result);
        setData(result.departements);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    console.log("user selected", e.target.value);
    setSelectedDepartement(e.target.value);

    if (e.target.value === 'Aucun département sélectionné') {
      setDepartement(null);
    } else {
      setDepartement(e.target.value);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='select-departements'>
      {data && data.length > 0 ? (
        <select className="selectinputdepartements" value={selectedDepartement} onChange={handleChange}>
          <option value='Aucun département sélectionné'>Aucun département sélectionné</option>
          {data.map((departement, index) => (
            <option key={index} value={departement}>
              {departement}
            </option>
          ))}
        </select>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default SelectDepartement;