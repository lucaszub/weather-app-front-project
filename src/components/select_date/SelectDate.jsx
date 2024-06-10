// SelectDate.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './selectDate.css'; 

const SelectDate = ({ selectedDate, onChangeDate }) => {
  return (
    <DatePicker 
      selected={selectedDate} 
      onChange={(date) => onChangeDate(date)} 
      className="date-picker"
      dateFormat="yyyy-MM-dd" 
    />
  );
};

export default SelectDate;
