
import React from 'react';

const Catalog = ({ title, price, img }) => (
    <div className="catalog-product" title={title}>
        <img
            src={img}
            className="catalog-product-image"
            alt={title}
        />
        <p className="catalog-product-title">
            {title} <br /> <b>{price} €</b>
        </p>
    </div>
);

export default Catalog;
