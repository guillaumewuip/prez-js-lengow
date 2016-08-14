'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Example 1
 */

var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
    }

    _createClass(Input, [{
        key: '_handleChange',
        value: function _handleChange(e) {
            this.props.update(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('input', {
                value: this.props.text,
                onChange: this._handleChange.bind(this)
            });
        }
    }]);

    return Input;
}(React.Component);

;

var Example1 = function (_React$Component2) {
    _inherits(Example1, _React$Component2);

    function Example1() {
        _classCallCheck(this, Example1);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Example1).call(this));

        _this2.state = {
            text: 'Hello world'
        };
        return _this2;
    }

    _createClass(Example1, [{
        key: 'update',
        value: function update(newText) {
            this.setState({ text: newText });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Input, {
                    text: this.state.text,
                    update: this.update.bind(this) }),
                React.createElement(
                    'p',
                    null,
                    this.state.text
                )
            );
        }
    }]);

    return Example1;
}(React.Component);

;

ReactDOM.render(React.createElement(Example1, null), document.querySelector('.js-react-example1'));

var Example2_1 = function (_React$Component3) {
    _inherits(Example2_1, _React$Component3);

    function Example2_1() {
        _classCallCheck(this, Example2_1);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Example2_1).apply(this, arguments));
    }

    _createClass(Example2_1, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                'Hello world'
            );
        }
    }]);

    return Example2_1;
}(React.Component);

;

var Example2_2 = function Example2_2() {
    return React.createElement(
        'p',
        null,
        'Hello World'
    );
};

ReactDOM.render(React.createElement(Example2_1, null), document.querySelector('.js-react-example2-1'));

ReactDOM.render(React.createElement(Example2_2, null), document.querySelector('.js-react-example2-2'));
//# sourceMappingURL=app.js.map
