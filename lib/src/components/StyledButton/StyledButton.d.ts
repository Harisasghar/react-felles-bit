import * as React from 'react';
export interface StyledButtonProps {
    primary?: boolean;
    disabled?: boolean;
}
export interface StyledButtonState {
}
export declare class StyledButton extends React.Component<StyledButtonProps, StyledButtonState> {
    constructor(props: StyledButtonProps);
    render(): JSX.Element;
}
