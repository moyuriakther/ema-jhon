import React from 'react';

const NotFound = () => {
    const divStyle = {
        textAlign: 'center',
        color: 'red'
    }
    return (
        <div style={divStyle}>
            <h2>Sorry, Page Not Found</h2>
            <p>404 Error !!</p>
        </div>
    );
};

export default NotFound;