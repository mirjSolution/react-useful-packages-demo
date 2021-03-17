// npm install react-datepicker
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        closeOnScroll={true}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='MM/dd/yyyy'
        // minDate={new Date()}
        // maxDate={new Date()}
        // filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode='select'
      />
    </div>
  );
}

export default ReactDatePicker;
