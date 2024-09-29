import React from 'react';

const Button = ({ onClick }) => {
    return (
        <div className='button-container'>
             <button className="button-30" role="button" onClick={onClick}>Show Dates</button>
        </div>
       
    );
};

export default Button;
