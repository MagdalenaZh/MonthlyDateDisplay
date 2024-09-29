import React from 'react';

// Functional component for selecting a month
const MonthSelector = ({ onMonthChange }) => {

    // Event handler for when the selected option changes
    const handleChange = (event) => {
        // Call the parent component's function to handle the month change
        // event.target.value gives the selected month's value as a string
        onMonthChange(event.target.value);
    };

    return (
        <div className="select-container">
            <select onChange={handleChange}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        </div>
    );
};

export default MonthSelector;
