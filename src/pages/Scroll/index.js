import React from 'react';

const LongPageInScrollContainer = (prop) => {
    return (
        <div className="h-[450px] overflow-y-auto border border-gray-300 rounded-md p-4 shadow-md">
            {prop.children}
        </div>
    );
};

export default LongPageInScrollContainer;