
import React from 'react';

import { CATALOG } from '../constants.json';

import Button from './Button.jsx';
import Product from './Product.jsx';
import Search from './Search.jsx';
import Loader from './Loader.jsx';

const Grid = ({ fetching, products, fetchProducts }) => {
    const items = products.map((c) => (
        <Product
            key={`${c.get('id')}`}
            title={c.get('title')}
            img={c.get('img')}
            price={c.get('price')}
        />
    ));

    const noItems = products.size === 0 ? (
        <div className="col-xs-12">
            <div className="no-content">
                <div>
                    <h2>Oups, there is no products. :(</h2>
                    <p>
                        But maybe you can adjust your search
                        to find your desired products ?
                    </p>
                </div>
            </div>
        </div>
    ) : '';

    const more = products.size > 0 ? (
        <div className="col-xs-12 text-center">
            <Button
                click={() => fetchProducts(CATALOG)}
            />
        </div>
    ) : '';

    const loader = fetching ? (
        <div className="col-xs-12">
            <Loader text="Loading products..." />
        </div>
    ) : '';

    return (
        <div className="container">

            <div className="filters-box margin-standard margin-top-standard">
                <div className="filters">
                    <div className="pull-left filters-selects">
                        <Search
                            placeholder="Search something"
                        />
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-xs-12">
                    <div className="catalog-products">
                        {items}
                    </div>
                </div>

                {noItems}

                {loader}

                {more}
            </div>
        </div>
    );
};

export default Grid;
