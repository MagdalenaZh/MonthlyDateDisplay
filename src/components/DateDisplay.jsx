import React from 'react';

// Functional component for displaying a list of dates
const DateDisplay = ({ dates }) => {
    return (
        <div className="display-container">
            <textarea
                readOnly  // Makes the textarea non-editable by the user
                value={dates.join('\n')}  // Convert array of dates to a string with each date on a new line
                rows={dates.length}       // Set the number of rows based on the number of dates
            />
        </div>
    );
};

export default DateDisplay;
