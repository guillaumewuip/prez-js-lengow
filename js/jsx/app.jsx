
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
