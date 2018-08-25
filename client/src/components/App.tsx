import * as React from 'react';
import { StyleProps, css } from '../ui';

import { styled } from 'styletron-react';
import { Editor } from './Editor';

export interface AppProps extends StyleProps {

}

type Props = AppProps;

const Container = css('div', {
  display: 'flex',
  flexDirection: 'column'
});

const FlexEditor = css(Editor, {
  flex: '1 1'
});

export class App extends React.Component<Props> {
  render() {
    const { props } = this;
    const { className, style } = props;

    return (
      <Container className={className ? `${className} fill` : 'fill'} style={style}>
        <FlexEditor />
      </Container>
    )
  }
}