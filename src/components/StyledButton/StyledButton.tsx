import * as React from 'react';
import styled, { css } from 'styled-components'
// const css = require('styled-components').css;
// const styled = require('styled-components').default;

export interface StyledButtonProps {  
  primary?: boolean;
  disabled?: boolean;
}

export interface StyledButtonState {
}

const StyledBtn = styled.button<StyledButtonProps>`  
  border-radius: 3px;
  transition: background-color .2s, color .2s;
  border: 1px solid #317aec;  
  padding: .3rem 1rem .3rem 1rem;

  ${props => {
      if(props.primary){
        return css`
        background: #317aec;
        color: white;
        :hover{ background-color: #1b6dc5;}`;
      }
      else {
        return css`
          background: transparent;
          color: #317aec;
          :hover{ background-color:  rgb(223, 223, 223);}`;
      }
    }
  };
  ${props => props.disabled && css`
    opacity: .5;
  `};
` 

export class StyledButton extends React.Component<StyledButtonProps, StyledButtonState> {
  constructor(props: StyledButtonProps) {    
    super(props);
    this.state = {
    }
  }

  public render() {
    return (
      <StyledBtn primary={this.props.primary} disabled={this.props.disabled}>{this.props.children}</StyledBtn>
    );
  }
}
