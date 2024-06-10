import './comparaison.css';
import React, { useState, useEffect } from 'react';
import { Statistique } from '../../components/statistique/Statistique';
import SelectDate from '../../components/select_date/SelectDate';
import { calculateGranularity } from '../../utils/dateUtils'; 
import SelectRegion from '../../components/selectRegion/SelectRegion'; 
import SelectDepartement from '../../components/selectDepartement/SelectDepartement';
import Linechart from '../../components/linechart/Linechart';
import ThermostatIcon from '@mui/icons-material/Thermostat';

function Comparaison() {
  const [startDate, setStartDate] = useState(new Date("2024-05-01"));
  const [endDate, setEndDate] = useState(new Date('2024-05-31'));
  const [granularity, setGranularity] = useState("year");
  const [temperatureStats, setTemperatureStats] = useState({
    temperature_moyenne: null,
    temperature_minimum: null,
    temperature_maximum: null
  });
  const [region, setRegion] = useState(null);
  const [departement, setDepartement] = useState(null);

  useEffect(() => {
    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];
    
    const newGranularity = calculateGranularity(startDateStr, endDateStr);
    setGranularity(newGranularity);
  }, [startDate, endDate]);

  const calculateTemperatureStats = (data) => {
    if (!data || data.length === 0) {
      setTemperatureStats({
        temperature_moyenne: null,
        temperature_minimum: null,
        temperature_maximum: null
      });
      return;
    }

    let sumTemperature = 0;
    let count = 0;
    let minTemperature = Infinity;
    let maxTemperature = -Infinity;

    data.forEach(day => {
      if (day.temperature_moyenne !== undefined) {
        sumTemperature += day.temperature_moyenne;
        count++;
      }
      if (day.temperature_minimum !== undefined) {
        minTemperature = Math.min(minTemperature, day.temperature_minimum);
      }
      if (day.temperature_maximum !== undefined) {
        maxTemperature = Math.max(maxTemperature, day.temperature_maximum);
      }
    });

    setTemperatureStats({
      temperature_moyenne: count > 0 ? (sumTemperature / count).toFixed(1) : null,
      temperature_minimum: minTemperature !== Infinity ? minTemperature : null,
      temperature_maximum: maxTemperature !== -Infinity ? maxTemperature : null
    });
  };

  return (
    <div>
      <div className='selectors'>
      <SelectDate selectedDate={startDate} onChangeDate={setStartDate} />
      <SelectDate selectedDate={endDate} onChangeDate={setEndDate} />
      <SelectRegion setRegion={setRegion} /> 
      <SelectDepartement setDepartement={setDepartement} />   
      </div>
      
      <div className='containerchart'>
        <Linechart
              startDate={startDate}
              endDate={endDate}
              region={region}
              departement={departement}
              granularity={granularity}
              setTemperatureStats={calculateTemperatureStats} // Pass the calculation function
            />
      
      </div>
      {/* <div className='statistiques'>
        <Statistique />
        <Statistique />
        <Statistique />
      </div> */}

      <div className='TemperatureStats-2'>
          <div className='TemperatureStat' >
            <div className='text'>Température Moyenne</div>
            <div className='number'>{temperatureStats.temperature_moyenne ? `${temperatureStats.temperature_moyenne}°C` : 'N/A'}</div>
            <ThermostatIcon className="icon" />
          </div>
          <div className='TemperatureStat' >
            <div className='text'>Température minimale</div>
            <div className='number'>{temperatureStats.temperature_minimum ? `${temperatureStats.temperature_minimum}°C` : 'N/A'}</div>
            <ThermostatIcon className="icon" />
          </div>
    
          <div className='TemperatureStat' >
            <div className='text'>Température maximale</div>
            <div className='number'>{temperatureStats.temperature_maximum ? `${temperatureStats.temperature_maximum}°C` : 'N/A'}</div>
            <ThermostatIcon className="icon" />
          </div>
        </div>
    </div>
  );
}

export default Comparaison;