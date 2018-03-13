"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/joshpitzalis/Desktop/practice/blockchain/kickstarter/components/Header.js";


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleItemClick = function (e, _ref2) {
      var name = _ref2.name;
      return _this.setState({ activeItem: name });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;

      return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement("a", { className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Crowdcoin")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: "signup",
        active: activeItem === "signup",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("a", { className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Campaigns"))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: "help",
        active: activeItem === "help",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("a", { className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "+")))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkxpbmsiLCJIZWFkZXIiLCJzdGF0ZSIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJhY3RpdmVJdGVtIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7OzRNQUNKLEEsUUFBUSxBLFUsQUFFUixrQkFBa0IsVUFBQSxBQUFDLFVBQUQ7VUFBQSxBQUFNLGFBQU4sQUFBTTthQUFXLE1BQUEsQUFBSyxTQUFTLEVBQUUsWUFBakMsQUFBaUIsQUFBYyxBQUFjO0E7Ozs7OzZCQUV0RDtVQUFBLEFBQ0MsYUFBZSxLQURoQixBQUNxQixNQURyQixBQUNDLEFBRVI7OzZCQUNFLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhO29CQUExQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBRUYsK0JBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTtjQUFOLEFBQ08sQUFDTDtnQkFBUSxlQUZWLEFBRXlCLEFBQ3ZCO2lCQUFTLEtBSFgsQUFHZ0I7O29CQUhoQjtzQkFBQSxBQUtFO0FBTEY7QUFDRSx5QkFJQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBUE4sQUFDRSxBQUtFLEFBQ0UsQUFJSixnQ0FBQyxjQUFELHNCQUFBLEFBQU07Y0FBTixBQUNPLEFBQ0w7Z0JBQVEsZUFGVixBQUV5QixBQUN2QjtpQkFBUyxLQUhYLEFBR2dCOztvQkFIaEI7c0JBQUEsQUFLRTtBQUxGO0FBQ0UseUJBSUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQXRCVixBQUNFLEFBSUUsQUFXRSxBQUtFLEFBQ0UsQUFNWDs7Ozs7QUFwQ2tCLEEsQUF1Q3JCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9zaHBpdHphbGlzL0Rlc2t0b3AvcHJhY3RpY2UvYmxvY2tjaGFpbi9raWNrc3RhcnRlciJ9