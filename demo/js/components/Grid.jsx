
import React from 'react';

import Button from './Button.jsx';
import Catalog from './Catalog.jsx';
import Search from './Search.jsx';
import Loader from './Loader.jsx';

const Grid = ({ loading, catalogs }) => {
    const items = catalogs.map((c) => (
        <Catalog
            key={c.title}
            title={c.title}
            img={c.img}
            price={c.price}
        />
    ));

    const noItems = catalogs.length === 0 ? (
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

    const more = catalogs.length > 0 ? (
        <div className="col-xs-12">
            <Button
                click={() => console.log('TODO')}
            />
        </div>
    ) : '';

    const container = loading
        ? (
        <div className="row">
            <div className="col-xs-12">
                <Loader text="Loading products..." />
            </div>
        </div>
        )
        : (
        <div className="row">
            <div className="col-xs-12">
                <div className="catalog-products">
                    {items}
                </div>
            </div>

            {noItems}

            {more}
        </div>
        )
    ;

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

            {container}
        </div>
    );
};

export default Grid;
