// components/CardParagraph.jsx
import React from 'react';

const CardParagraph = ({ children }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md font-kai">
            {children}
        </div>
    );
};

export default CardParagraph;