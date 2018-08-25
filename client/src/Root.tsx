import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';

export interface RootProps {

}

type Props = RootProps;

export class Root extends React.Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <div>
          Hello
        </div>
      </BrowserRouter>
    );
  }
}