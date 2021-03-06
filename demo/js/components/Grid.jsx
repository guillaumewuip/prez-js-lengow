
import React from 'react';


import Button from './Button.jsx';
import Product from './Product.jsx';
import Search from './Search.jsx';
import Loader from './Loader.jsx';

import filter from '../utils/filter';

const CATALOG = 1;

/**
 * We can use the state to store the current filter
 */
class Grid extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(query) {
        this.setState({ filter: query });
    }
    render() {
        const { fetching, products, fetchProducts } = this.props;

        // let's build the products
        const items = products
            .filter(filter(this.state.filter))
            .map((c) => (
                <Product
                    key={`${c.get('id')}`}
                    title={c.get('title')}
                    img={c.get('img')}
                    price={c.get('price')}
                />
            ));

        // if no items, show a empty message
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

        // build more button if needed
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
                <div
                    className="filters-box margin-standard margin-top-standard"
                >
                    <div className="filters">
                        <div className="pull-left filters-selects">
                            <Search
                                placeholder="Search something"
                                change={this.handleChange}
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
    }
}

export default Grid;
