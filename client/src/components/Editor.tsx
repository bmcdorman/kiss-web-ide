import * as React from 'react';

import { CodeEditor } from '../containers/CodeEditor';
import { StyleProps } from '../ui/Style';

export interface EditorProps extends StyleProps {

}

interface EditorState {
  code: string;
}

type Props = EditorProps;
type State = EditorState;

export class Editor extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context);

    this.state = {
      code: '// test'
    };
  }

  private onCodeChange_ = (code: string) => {
    this.setState({
      code
    });
  }
  
  render() {
    const { props, state } = this;
    const { className, style } = props;
    const { code } = state;

    return (
      <CodeEditor
        className={className}
        style={style}
        value={code}
        onValueChange={this.onCodeChange_}
      />
    )
  }
}