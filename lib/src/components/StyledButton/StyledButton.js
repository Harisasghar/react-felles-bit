var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import styled, { css } from 'styled-components';
var StyledBtn = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["  \n  border-radius: 3px;\n  transition: background-color .2s, color .2s;\n  border: 1px solid #317aec;  \n  padding: .3rem 1rem .3rem 1rem;\n\n  ", ";\n  ", ";\n"], ["  \n  border-radius: 3px;\n  transition: background-color .2s, color .2s;\n  border: 1px solid #317aec;  \n  padding: .3rem 1rem .3rem 1rem;\n\n  ",
    ";\n  ",
    ";\n"])), function (props) {
    if (props.primary) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background: #317aec;\n        color: white;\n        :hover{ background-color: #1b6dc5;}"], ["\n        background: #317aec;\n        color: white;\n        :hover{ background-color: #1b6dc5;}"])));
    }
    else {
        return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          background: transparent;\n          color: #317aec;\n          :hover{ background-color:  rgb(223, 223, 223);}"], ["\n          background: transparent;\n          color: #317aec;\n          :hover{ background-color:  rgb(223, 223, 223);}"])));
    }
}, function (props) { return props.disabled && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    opacity: .5;\n  "], ["\n    opacity: .5;\n  "]))); });
var StyledButton = /** @class */ (function (_super) {
    __extends(StyledButton, _super);
    function StyledButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    StyledButton.prototype.render = function () {
        return (React.createElement(StyledBtn, { primary: this.props.primary, disabled: this.props.disabled }, this.props.children));
    };
    return StyledButton;
}(React.Component));
export { StyledButton };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=StyledButton.js.map