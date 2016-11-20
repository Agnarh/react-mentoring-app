import React from 'react';

var ProgressBar = function (props) {
    var value = Math.floor(props.value * 100);

    return (
        <div className="progress">
            <div 
                className="progress-bar" 
                role="progressbar" 
                aria-valuenow={value} 
                aria-valuemin="0" 
                aria-valuemax="100" 
                style={{ width: `${value}%` }}>
            </div>
        </div>
    );
};

export default ProgressBar;