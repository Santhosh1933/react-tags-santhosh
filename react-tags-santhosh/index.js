"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tags = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Tags = function Tags(_ref) {
  var _ref$tagsBg = _ref.tagsBg,
    tagsBg = _ref$tagsBg === void 0 ? "#E2E8F0" : _ref$tagsBg,
    _ref$tagsColor = _ref.tagsColor,
    tagsColor = _ref$tagsColor === void 0 ? "black" : _ref$tagsColor,
    _ref$tagsDeleteBg = _ref.tagsDeleteBg,
    tagsDeleteBg = _ref$tagsDeleteBg === void 0 ? "#4A5568" : _ref$tagsDeleteBg,
    _ref$tagsDeleteColor = _ref.tagsDeleteColor,
    tagsDeleteColor = _ref$tagsDeleteColor === void 0 ? "white" : _ref$tagsDeleteColor,
    _ref$limit = _ref.limit,
    limit = _ref$limit === void 0 ? null : _ref$limit,
    _ref$duplicate = _ref.duplicate,
    duplicate = _ref$duplicate === void 0 ? true : _ref$duplicate,
    _ref$setDatas = _ref.setDatas,
    setDatas = _ref$setDatas === void 0 ? function () {} : _ref$setDatas;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    arr = _useState2[0],
    setArr = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var deleteItem = function deleteItem(val) {
    setArr(arr.filter(function (data, i) {
      return i !== val;
    }));
    setDatas(arr.filter(function (data, i) {
      return i !== val;
    }));
  };
  var styles = {
    tagsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem"
    },
    tagsDelete: {
      backgroundColor: tagsDeleteBg,
      color: tagsDeleteColor,
      height: "1.25rem",
      width: "1.25rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%"
    },
    tagsTagContainer: {
      display: "flex",
      gap: "0.5rem",
      color: tagsColor,
      backgroundColor: tagsBg,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "0.5rem",
      padding: "0.25rem 0.75rem",
      width: "fit-content"
    },
    tagsGroup: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      width: "100%"
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.tagsContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.tagsGroup
  }, arr.map(function (data, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      style: styles.tagsTagContainer
    }, /*#__PURE__*/_react["default"].createElement("p", null, data), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return deleteItem(i);
      },
      style: styles.tagsDelete
    }, "x"));
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Skill Set ...",
    value: value,
    onChange: function onChange(e) {
      setValue(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        if (duplicate) {
          if (e.target.value !== "") {
            if (arr.length != limit) {
              setArr([].concat(_toConsumableArray(arr), [e.target.value]));
              setDatas([].concat(_toConsumableArray(arr), [e.target.value]));
              setValue("");
            }
          }
        } else {
          if (!arr.includes(e.target.value)) {
            if (e.target.value !== "") {
              if (arr.length != limit) {
                setArr([].concat(_toConsumableArray(arr), [e.target.value]));
                setDatas([].concat(_toConsumableArray(arr), [e.target.value]));
                setValue("");
              } else {
                setValue("");
              }
            }
          }
        }
      }
    }
  }));
};
exports.Tags = Tags;
