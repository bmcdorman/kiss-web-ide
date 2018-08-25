import * as React from 'react';
import { StyleProps } from '../ui/Style';

export interface MenuBarProps extends StyleProps {

}

type Props = MenuBarProps;

export class MenuBar extends React.Component<Props> {
  render() {
    const { props } = this;
    const { className, style } = props;
    return (
      <div className={className} style={style}>
        Menu Bar
      </div>
    )
  }
}