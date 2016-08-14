
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
