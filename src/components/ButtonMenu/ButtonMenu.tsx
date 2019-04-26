import * as React from 'react';
import { ButtonGroup } from 'reactstrap';
import Button from '../Button/Button';

export interface ButtonMenuProps {
  primary?: boolean;
  values: string[];
}

export interface ButtonMenuState {
}

export default class ButtonMenu extends React.Component<ButtonMenuProps, ButtonMenuState> {
  constructor(props: ButtonMenuProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <ButtonGroup>
        {this.props.values.map(x => {
          return <Button key={x} value={x} primary={this.props.primary}/>
        })}
      </ButtonGroup>
    );
  }
}
