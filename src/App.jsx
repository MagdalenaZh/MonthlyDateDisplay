import React, { useState } from 'react';
import Heading from './components/Heading';
import Prompt from './components/Prompt';
import MonthSelector from './components/MonthSelector';
import Button from './components/Button';
import DateDisplay from './components/DateDisplay';

const App = () => {
  // State to hold the selected month (default is 1 for January)
  const [month, setMonth] = useState(1);

  // State to hold the generated dates for the selected month
  const [dates, setDates] = useState([]);

  // State to control whether the DateDisplay component should be shown
  const [showDates, setShowDates] = useState(false);

  // Function to handle month selection changes
  const handleMonthChange = (selectedMonth) => {
      // Update the month state with the selected value
      setMonth(selectedMonth);
  };

  // Function to handle button clicks
  const handleButtonClick = () => {
      // Get the number of days in the selected month
      const daysInMonth = new Date(2024, month, 0).getDate();

      // Format month to always have two digits 
      const paddedMonth = month.toString().padStart(2, '0');

      // Generate dates for the selected month
      const generatedDates = [];
      for (let i = 1; i <= daysInMonth; i++) {
          generatedDates.push(`${i}.${paddedMonth}`);
      }
      
      setDates(generatedDates);

      setShowDates(true);
  };

  return (
      <div className='app-container'>
          <Heading />
          <Prompt />
          <MonthSelector onMonthChange={handleMonthChange} />
          <Button onClick={handleButtonClick} />
          {showDates && <DateDisplay dates={dates} />}
      </div>
  );
};

export default App;
