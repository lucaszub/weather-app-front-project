// Linechart.js
import React, { useState, useEffect } from 'react';
import './selectRegion.css'; 

const SelectRegion = ({setRegion}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState('Aucune région sélectionnée'); // Add this line

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await fetch(`http://127.0.0.1:8000/regions/regions/`); // for local api
        const response = await fetch(`http://13.36.174.69:8000/regions/regions/`); // for aws api 
        const result = await response.json();
        console.log("API response", result)
        setData(result.Regions);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Log the current selectedRegion
  

  const handleChange = (e) => { // Add this function
    console.log("user selected", e.target.value);
    setSelectedRegion(e.target.value);
    setRegion(e.target.value);

    if (e.target.value === 'Aucune région sélectionnée') {
      setRegion(null);
    }

  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='select-regions'>
      {data && data.length > 0 ? (
        <select className="selectinput-region" value={selectedRegion} onChange={handleChange}> // Update this line
          <option value='Aucune région sélectionnée'>Aucune région sélectionnée</option> // Add this line
          {data.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default SelectRegion;