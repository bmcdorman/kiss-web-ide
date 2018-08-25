import * as React from 'react';

import { styled } from 'styletron-react';

export interface StyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export const css = <P>(component: React.ComponentType<P> | string, style: React.CSSProperties | ((props: P) => React.CSSProperties)) => {
  return styled(component, style);
};