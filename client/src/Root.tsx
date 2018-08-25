import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';

import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

const engine = new Styletron({
  prefix: '_'
});

export interface RootProps {

}

type Props = RootProps;

export class Root extends React.Component<Props> {
  render() {
    return (
      <StyletronProvider value={engine}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyletronProvider>
    );
  }
}