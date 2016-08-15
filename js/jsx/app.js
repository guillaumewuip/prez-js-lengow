'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

/*
 * Example 2
 */

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

/*
 * Example 3
 */

var Example3_1 = function (_React$Component4) {
    _inherits(Example3_1, _React$Component4);

    function Example3_1() {
        _classCallCheck(this, Example3_1);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Example3_1).apply(this, arguments));
    }

    _createClass(Example3_1, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                { onClick: this.props.click },
                this.props.text
            );
        }
    }]);

    return Example3_1;
}(React.Component);

;

var Example3_2 = function Example3_2(props) {
    return React.createElement(
        'p',
        { onClick: props.click },
        props.text
    );
};

ReactDOM.render(React.createElement(Example3_1, { text: 'Petit poney', click: function click() {
        return alert('coucou');
    } }), document.querySelector('.js-react-example3-1'));

ReactDOM.render(React.createElement(Example3_2, { text: 'Petit poney', click: function click() {
        return alert('coucou');
    } }), document.querySelector('.js-react-example3-2'));

/*
 * Example 4
 */

var Item = function Item(props) {
    return React.createElement(
        'li',
        null,
        props.emoji
    );
};

var List = function List(props) {
    var poneys = props.poneys.map(function (p, i) {
        return React.createElement(Item, { key: i, emoji: p });
    });
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Famille Poney :'
        ),
        React.createElement(
            'ul',
            null,
            poneys
        )
    );
};

var poneys = ['🐴', '🐎', '🏇'];

ReactDOM.render(React.createElement(List, { poneys: poneys }), document.querySelector('.js-react-example4-1'));

/*
 * Example 5
 */

var Item5 = function Item5(_ref) {
    var poney = _ref.poney;

    var c = poney.color;
    return React.createElement(
        'li',
        null,
        poney.emoji,
        ' (',
        React.createElement(
            'span',
            { style: { color: c } },
            c
        ),
        ')'
    );
};

var poneys5 = [{ emoji: '🐴', color: 'red' }, { emoji: '🐎', color: 'blue' }, { emoji: '🏇', color: 'red' }];

var FilterBar = function FilterBar(props) {
    return React.createElement(
        'p',
        { className: props.classes, 'data-fragment-index': '1' },
        React.createElement(
            'button',
            {
                onClick: function onClick() {
                    return props.filter('all');
                } },
            'Tout'
        ),
        React.createElement(
            'button',
            {
                onClick: function onClick() {
                    return props.filter('red');
                } },
            'Rouge'
        ),
        React.createElement(
            'button',
            {
                onClick: function onClick() {
                    return props.filter('blue');
                } },
            'Bleu'
        )
    );
};

var List5_2 = function (_React$Component5) {
    _inherits(List5_2, _React$Component5);

    function List5_2() {
        _classCallCheck(this, List5_2);

        var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(List5_2).call(this));

        _this5.state = {
            filter: 'all'
        };
        return _this5;
    }

    _createClass(List5_2, [{
        key: '_handleFilter',
        value: function _handleFilter(filter) {
            this.setState({ filter: filter });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var poneys = this.props.poneys.filter(function (p) {
                return _this6.state.filter === 'all' || _this6.state.filter === p.color;
            }).map(function (p, i) {
                return React.createElement(Item5, { key: i, poney: p });
            });

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Famille Poney :'
                ),
                React.createElement(
                    'ul',
                    null,
                    poneys
                ),
                React.createElement(FilterBar, { classes: 'fragment', filter: this._handleFilter.bind(this) })
            );
        }
    }]);

    return List5_2;
}(React.Component);

;

ReactDOM.render(React.createElement(List5_2, { poneys: poneys5 }), document.querySelector('.js-react-example5-1'));

/**
 * Redux
 */

var state = {
    poneys: [{ id: 1, emoji: '🐴', color: 'red', checked: false }, { id: 2, emoji: '🐎', color: 'blue', checked: false }, { id: 3, emoji: '🏇', color: 'red', checked: false }],
    filter: 'all'
};

/**
 * @param {Object}   props.poney
    { id: 1, emoji: '🐴', color: 'red',  checked: false }
 * @param {Function} props.toggle
 */
var ItemRedux = function ItemRedux(_ref2) {
    var poney = _ref2.poney;
    var toggle = _ref2.toggle;

    var c = poney.get('color');
    return React.createElement(
        'li',
        { className: 'mod-no-style' },
        React.createElement('input', {
            type: 'checkbox',
            id: 'check-' + poney.get('id'),
            defaultChecked: poney.get('checked'),
            onClick: function onClick() {
                return toggle(poney);
            } }),
        React.createElement(
            'label',
            { htmlFor: 'check-' + poney.get('id') },
            poney.get('emoji'),
            ' (',
            React.createElement(
                'span',
                { style: { color: c } },
                c
            ),
            ')'
        )
    );
};

var ListRedux = function ListRedux(_ref3) {
    var poneys = _ref3.poneys;
    var togglePoney = _ref3.togglePoney;

    var items = poneys.map(function (p, i) {
        return React.createElement(ItemRedux, { key: i, poney: p, toggle: togglePoney });
    });
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Famille Poney :'
        ),
        React.createElement(
            'ul',
            null,
            items
        )
    );
};

var Summary = function Summary(_ref4) {
    var poneys = _ref4.poneys;

    var n = poneys.reduce(function (count, p) {
        return p.get('checked') ? count + 1 : count;
    }, 0);
    return React.createElement(
        'p',
        null,
        n,
        ' ',
        n > 1 ? 'poneys sélectionnés' : 'poney sélectionné'
    );
};

var PoneyApp = function PoneyApp(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(ListRedux, props),
        React.createElement(Summary, { poneys: props.poneys })
    );
};

document.querySelectorAll('.js-redux-example1').forEach(function (elem) {
    ReactDOM.render(React.createElement(PoneyApp, { poneys: Immutable.fromJS(state.poneys) }), elem);
});

var togglePoney = function togglePoney(poney) {
    return {
        type: 'TOGGLE_PONEY',
        poney: poney
    };
};

var reducer = function reducer(state, action) {
    var _ret = function () {
        switch (action.type) {
            case 'INIT':
                return {
                    v: Immutable.fromJS(action.state)
                };
                break;
            case 'TOGGLE_PONEY':

                var poneyIndex = state.get('poneys').findIndex(function (p) {
                    return p.get('id') === action.poney.get('id');
                }),
                    checked = state.get('poneys').get(poneyIndex).get('checked');

                var poney = state.get('poneys').get(poneyIndex).set('checked', !checked);

                return {
                    v: state.update('poneys', function (poneys) {
                        return poneys.set(poneyIndex, poney);
                    })
                };
                break;
            default:
                break;
        }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
};

var store = Redux.createStore(reducer);
store.dispatch({
    type: 'INIT',
    state: state
});

var mapStateToProps = function mapStateToProps(state) {
    return {
        poneys: state.get('poneys')
    };
};

var App = ReactRedux.connect(mapStateToProps, { togglePoney: togglePoney })(PoneyApp);

ReactDOM.render(React.createElement(
    ReactRedux.Provider,
    { store: store },
    React.createElement(App, null)
), document.querySelector('.js-redux-example2'));
//# sourceMappingURL=app.js.map
