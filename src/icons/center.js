"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

var _default =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
      _classCallCheck(this, _default);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(_default).apply(this, arguments)
      );
    }

    _createClass(_default, [
      {
        key: "render",
        value: function render() {
          return _react["default"].createElement(
            "svg",
            _extends({}, this.props, {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }),
            _react["default"].createElement("title", null, "Artboard 1"),
            _react["default"].createElement(
              "g",
              {
                fill: "none",
                fillRule: "evenodd"
              },
              _react["default"].createElement("path", {
                d: "M0 0h24v24H0z"
              }),
              _react["default"].createElement("path", {
                d:
                  "M1.686,3.327h16.754c0.356,0,0.645-0.288,0.645-0.644c0-0.356-0.288-0.645-0.645-0.645H1.686 c-0.356,0-0.644,0.288-0.644,0.645C1.042,3.039,1.33,3.327,1.686,3.327z M4.263,6.549c-0.356,0-0.644,0.288-0.644,0.645 c0,0.356,0.288,0.644,0.644,0.644h11.599c0.356,0,0.645-0.288,0.645-0.644c0-0.356-0.288-0.645-0.645-0.645H4.263z M18.439,11.06 H1.686c-0.356,0-0.644,0.288-0.644,0.644c0,0.356,0.288,0.645,0.644,0.645h16.754c0.356,0,0.645-0.288,0.645-0.645 C19.084,11.348,18.796,11.06,18.439,11.06z M15.218,15.57H5.552c-0.356,0-0.645,0.288-0.645,0.645c0,0.355,0.289,0.644,0.645,0.644 h9.666c0.355,0,0.645-0.288,0.645-0.644C15.862,15.858,15.573,15.57,15.218,15.57z",
                fill: "currentColor"
              })
            )
          );
        }
      }
    ]);

    return _default;
  })(_react["default"].Component);

exports["default"] = _default;
