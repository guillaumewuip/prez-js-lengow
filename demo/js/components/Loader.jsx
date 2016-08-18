
import React from 'react';

const Loader = ({ text }) => (
    <div className="ajax-loading">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
        <h4 className="title-thin">{text}</h4>
    </div>
);

export default Loader;
