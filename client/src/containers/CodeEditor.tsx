import * as React from 'react';
import { render } from 'react-dom';
import * as monaco from 'monaco-editor';
import { StyleProps, css } from '../ui/Style';

import { styled } from 'styletron-react';

export interface CodeEditorProps extends StyleProps {
  value: string;

  onValueChange: (value: string) => void;
}

type Props = CodeEditorProps;

const Test = styled('span', {
  color: 'red'
});

declare const self: any;
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return '/json.worker.js';
    }
    if (label === 'css') {
      return '/css.worker.js';
    }
    if (label === 'html') {
      return '/html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return '/ts.worker.js';
    }
    return '/editor.worker.js';
  }
}


class CodeEditor_ extends React.Component<Props> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }
  
  private ref_: HTMLDivElement;
  private bindRef_ = (ref: HTMLDivElement) => {
    this.ref_ = ref;
  }

  private editor_: monaco.editor.IStandaloneCodeEditor;
  componentDidMount() {
    this.editor_ = monaco.editor.create(this.ref_, {
      value: this.props.value,
      language: 'cpp',
      fixedOverflowWidgets: true,
      automaticLayout: true,
      scrollBeyondLastLine: false,
      fontFamily: 'monospace',
      lineNumbers: 'on'
    });
  }

  componentWillUnmount() {
    this.editor_.dispose();
  }

  render() {
    const { props } = this;
    const { className, style } = props;
    
    return (
      <div
        ref={this.bindRef_}
        className={className}
        style={style}
      />
    );
  }
}

export const CodeEditor = css(CodeEditor_, {
  overflow: 'hidden',
  position: 'relative',
  fontFamily: 'monospace !important'
});