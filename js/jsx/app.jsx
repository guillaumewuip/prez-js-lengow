
/*
 * Example 1
 */

class Input extends React.Component {
    _handleChange(e) {
        this.props.update(e.target.value);
    }
    render() {
        return (
            <input
                value={this.props.text}
                onChange={this._handleChange.bind(this)}
                />
        );
    }
};

class Example1 extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Hello world',
        };
    }
    update(newText) {
        this.setState({ text: newText });
    }
    render() {
        return (
            <div>
                <Input
                    text={this.state.text}
                    update={this.update.bind(this)} />
                <p>{this.state.text}</p>
            </div>
        );
    }
};

ReactDOM.render(
    <Example1 />,
    document.querySelector('.js-react-example1')
);

/*
 * Example 2
 */

class Example2_1 extends React.Component {
    render() {
        return (
            <p>Hello world</p>
        );
    }
};

const Example2_2 = () => (
    <p>Hello World</p>
);

ReactDOM.render(
    <Example2_1 />,
    document.querySelector('.js-react-example2-1')
);

ReactDOM.render(
    <Example2_2 />,
    document.querySelector('.js-react-example2-2')
);

/*
 * Example 3
 */

class Example3_1 extends React.Component {
    render() {
        return (
            <p onClick={this.props.click}>{this.props.text}</p>
        );
    }
};

const Example3_2 = (props) => (
    <p onClick={props.click}>{props.text}</p>
);

ReactDOM.render(
    <Example3_1 text="Petit poney" click={() => alert('coucou')}/>,
    document.querySelector('.js-react-example3-1')
);

ReactDOM.render(
    <Example3_2 text="Petit poney" click={() => alert('coucou')}/>,
    document.querySelector('.js-react-example3-2')
);

/*
 * Example 4
 */

const Item = (props) => (
    <li>{props.emoji}</li>
);

const List = (props) => {
    var poneys = props.poneys.map((p, i) => <Item key={i} emoji={p} />);
    return (<div>
        <p>Famille Poney :</p>
        <ul>{poneys}</ul>
    </div>);
};

const poneys = ['🐴', '🐎', '🏇'];

ReactDOM.render(
    <List poneys={poneys} />,
    document.querySelector('.js-react-example4-1')
);

/*
 * Example 5
 */

const Item5 = ({ poney }) => {
    const c = poney.color;
    return (
        <li>{poney.emoji} (<span style={{ color: c }}>{c}</span>)</li>
    );
};

const poneys5 = [
    { emoji: '🐴', color: 'red' },
    { emoji: '🐎', color: 'blue' },
    { emoji: '🏇', color: 'red' },
];

const FilterBar = (props) => (
    <p className={props.classes} data-fragment-index="1">
        <button
            onClick={() => props.filter('all')}>
            Tout
        </button>
        <button
            onClick={() => props.filter('red')}>
            Rouge
        </button>
        <button
            onClick={() => props.filter('blue')}>
            Bleu
        </button>
    </p>
);

class List5_2 extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: 'all',
        };
    }
    _handleFilter(filter) {
        this.setState({ filter: filter });
    }
    render() {
        var poneys = this.props.poneys
            .filter((p) => {
                return this.state.filter === 'all'
                    || this.state.filter === p.color;
            })
            .map((p, i) => (
                <Item5 key={i} poney={p} />
            ));

        return (
            <div>
                <p>Famille Poney :</p>
                <ul>{poneys}</ul>
                <FilterBar classes="fragment" filter={this._handleFilter.bind(this)}/>
            </div>
        );
    }
};

ReactDOM.render(
    <List5_2 poneys={poneys5} />,
    document.querySelector('.js-react-example5-1')
);

/**
 * Redux
 */

const state = {
    poneys: [
        { id: 1, emoji: '🐴', color: 'red',  checked: false },
        { id: 2, emoji: '🐎', color: 'blue', checked: false },
        { id: 3, emoji: '🏇', color: 'red',  checked: false },
    ],
    filter: 'all',
};

/**
 * @param {Object}   props.poney
    { id: 1, emoji: '🐴', color: 'red',  checked: false }
 * @param {Function} props.toggle
 */
const ItemRedux = ({ poney, toggle }) => {
    const c = poney.get('color');
    return (
        <li className="mod-no-style">
            <input
                type="checkbox"
                id={`check-${poney.get('id')}`}
                defaultChecked={poney.get('checked')}
                onClick={() => toggle(poney)} />
            <label htmlFor={`check-${poney.get('id')}`}>
                {poney.get('emoji')} (<span style={{ color: c }}>{c}</span>)
            </label>
        </li>
    );
};

const ListRedux = ({ poneys, togglePoney }) => {
    const items = poneys.map((p, i) => (
        <ItemRedux key={i} poney={p} toggle={togglePoney} />
    ));
    return (
        <div>
            <p>Famille Poney :</p>
            <ul>{items}</ul>
        </div>
    );
};

const Summary = ({ poneys }) => {
    const n = poneys.reduce((count, p) => (
        p.get('checked') ? count + 1 : count
    ), 0);
    return <p>{n} {n > 1 ? 'poneys sélectionnés' : 'poney sélectionné'}</p>
};

const PoneyApp = (props) => (<div>
    <ListRedux {...props} />
    <Summary poneys={props.poneys} />
</div>);

document.querySelectorAll('.js-redux-example1').forEach((elem) => {
    ReactDOM.render(
        <PoneyApp poneys={ Immutable.fromJS(state.poneys) } />,
        elem
    );
});


const togglePoney = (poney) => {
    return {
        type: 'TOGGLE_PONEY',
        poney,
    };
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'INIT':
            return Immutable.fromJS(action.state);
            break;
        case 'TOGGLE_PONEY':

            const poneyIndex = state
                .get('poneys')
                .findIndex((p) => p.get('id') === action.poney.get('id')),
                checked = state.get('poneys').get(poneyIndex).get('checked');

            const poney = state.get('poneys')
                .get(poneyIndex)
                .set('checked', !checked);

            return state.update(
                'poneys',
                (poneys) => poneys.set(poneyIndex, poney)
            );
            break;
        default:
            break;
    }
};

const store = Redux.createStore(reducer);
store.dispatch({
    type: 'INIT',
    state,
});

const mapStateToProps = (state) => ({
    poneys: state.get('poneys'),
    //filter: state.filter,
});

const App = ReactRedux.connect(mapStateToProps, { togglePoney })(PoneyApp);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>,
    document.querySelector('.js-redux-example2')
);
