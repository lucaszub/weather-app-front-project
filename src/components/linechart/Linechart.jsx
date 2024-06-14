import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Linechart = ({ startDate, endDate, region, departement, granularity, setTemperatureStats }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const startDateStr = startDate.toISOString().split('T')[0];
      const endDateStr = endDate.toISOString().split('T')[0];
      try {                           
        // const response = await fetch(`http://127.0.0.1:8000/temperature_stats/temperature_stats/?start_date_str=${startDateStr}&end_date_str=${endDateStr}${region ? `&region_name=${region}` : ''}${departement ? `&department_name=${departement}` : ''}`); // for api local
        const response = await fetch(`http://13.36.174.69:8000/temperature_stats/temperature_stats/?start_date_str=${startDateStr}&end_date_str=${endDateStr}${region ? `&region_name=${region}` : ''}${departement ? `&department_name=${departement}` : ''}`); // for api aws
        const result = await response.json();
        setData(result.temperature_stats);
        console.log("API response", result); // Log the entire response
        setTemperatureStats(result.temperature_stats); // Pass the entire data array for calculation
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    


    fetchData();
  }, [region, departement, startDate, endDate, granularity]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const xAxisKey = {
    day: 'day',
    month: 'month',
    quarter: 'quarter',
    year: 'year'
  }[granularity];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="temperature_maximum" stroke="#db711a" fill="#f9e9dc" />
        <Area type="monotone" dataKey="temperature_moyenne" stroke="#38cc2b" fill="#dcebd7" />
        <Area type="monotone" dataKey="temperature_minimum" stroke="#16244B" fill="#F1F2F4" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Linechart;
