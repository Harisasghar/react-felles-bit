var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { ButtonGroup } from 'reactstrap';
import Button from '../Button/Button';
var ButtonMenu = /** @class */ (function (_super) {
    __extends(ButtonMenu, _super);
    function ButtonMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ButtonMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement(ButtonGroup, null, this.props.values.map(function (x) {
            return React.createElement(Button, { key: x, value: x, primary: _this.props.primary });
        })));
    };
    return ButtonMenu;
}(React.Component));
export default ButtonMenu;
//# sourceMappingURL=ButtonMenu.js.map