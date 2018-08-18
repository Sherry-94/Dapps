'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Solidity Projects\\kickstart\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      Contribution: '',
      errorMessage: '',
      successMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, campaign;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '', successMessage: '' });
                console.log(_this.props.address);
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.next = 10;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.Contribution, 'ether')
                });

              case 10:
                _routes.Router.replaceRoute('/Campaigns/' + _this.props.address);
                _this.setState({ successMessage: 'You have successfully contributed to this campaign' });

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:
                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, success: !!this.state.successMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Find it fascinating? You can contribute here!'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, { label: 'ether',
        value: this.state.Contribution,
        labelPosition: 'right',
        onChange: function onChange(event) {
          return _this3.setState({ Contribution: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success..!', content: this.state.successMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops...!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Contribute'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIndlYjMiLCJDYW1wYWlnbiIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJDb250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBYzs7Ozs7OztJQUdqQixBOzs7Ozs7Ozs7Ozs7Ozs7NE5BRUosQTtvQkFBUSxBQUNRLEFBQ2Q7b0JBRk0sQUFFUSxBQUNkO3NCQUhNLEFBR1UsQUFDaEI7ZUFKTSxBLEFBSUc7QUFKSCxBQUNOLGFBTUYsQTsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7c0JBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBRVQ7c0JBQUEsQUFBTSxBQUVOOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQUFoQixBQUE4QixJQUFJLGdCQUFoRCxBQUFjLEFBQWtELEFBQzlEO3dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFMVixBQUtQLEFBQXVCO2dDQUxoQjtnQ0FBQTt1QkFPZ0IsY0FBQSxBQUFLLElBUHJCLEFBT2dCLEFBQVM7O21CQUExQjtBQVBDLG9DQVNEO0FBVEMsMkJBU1Usd0JBQVMsTUFBQSxBQUFLLE1BVHhCLEFBU1UsQUFBb0I7Z0NBVDlCO2dDQVVELEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4Qjt3QkFDNUIsU0FEaUMsQUFDakMsQUFBUyxBQUNmO3lCQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsY0FaOUIsQUFVRCxBQUFtQyxBQUVoQyxBQUF5QztBQUZULEFBQ3ZDLGlCQURJOzttQkFJTjsrQkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFBdkMsQUFBNkMsQUFDN0M7c0JBQUEsQUFBSyxTQUFTLEVBQUMsZ0JBZlIsQUFlUCxBQUFjLEFBQWlCOztnQ0FmeEI7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBb0JQOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBcEJ0QixBQW9CUCxBQUFjLEFBQW1COzttQkFFbkM7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0F0Qk4sQUFzQlQsQUFBYyxBQUFVOzttQkF0QmY7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkEwQlg7bUJBQ0U7OzZCQUVJLEFBQUMsdUNBQUssVUFBWSxLQUFsQixBQUF1QixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUEvQyxBQUFxRCxjQUFjLFNBQVMsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFuRixBQUF5RjtvQkFBekY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0VBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLHlDQUFBLEFBQUMsd0NBQU0sT0FBUCxBQUFhLEFBQ2I7ZUFBUyxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNwQjt1QkFGQSxBQUVjLEFBQ2I7a0JBQVkseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLE1BQUEsQUFBTSxPQUE1QyxBQUFTLEFBQWMsQUFBNEI7QUFIaEU7b0JBQUE7c0JBSkosQUFDRSxBQUdFLEFBS0Y7QUFMRTsyQkFLRixBQUFDLDBDQUFRLFNBQVQsTUFBaUIsUUFBakIsQUFBd0IsY0FBYSxTQUFTLEtBQUEsQUFBSyxNQUFuRCxBQUF5RDtvQkFBekQ7c0JBVEYsQUFTRSxBQUNBO0FBREE7MEJBQ0EsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixZQUFXLFNBQVMsS0FBQSxBQUFLLE1BQS9DLEFBQXFEO29CQUFyRDtzQkFWRixBQVVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsTUFBckMsQUFBMEMsVUFBUyxTQUFuRDtvQkFBQTtzQkFBQTtBQUFBO1NBYk4sQUFFSSxBQVdFLEFBR1A7Ozs7O0FBcEQwQixBLEFBc0Q3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Tb2xpZGl0eSBQcm9qZWN0cy9raWNrc3RhcnQifQ==