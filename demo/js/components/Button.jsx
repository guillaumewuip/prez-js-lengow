
import React from 'react';

const Button = ({ click }) => (
    <button
        type="button"
        className="button"
        onClick={click}
    >
        Show more
    </button>
);

export default Button;
