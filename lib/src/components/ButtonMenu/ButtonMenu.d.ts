import * as React from 'react';
export interface ButtonMenuProps {
    primary?: boolean;
    values: string[];
}
export interface ButtonMenuState {
}
export default class ButtonMenu extends React.Component<ButtonMenuProps, ButtonMenuState> {
    constructor(props: ButtonMenuProps);
    render(): JSX.Element;
}
