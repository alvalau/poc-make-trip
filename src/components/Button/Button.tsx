import React from 'react';
import {animated} from 'react-spring';
import cx from 'classnames';

interface Props {
  className?: string;
  children: React.ReactNode;
  bgColor?: string;
  style?: object;
}

const Button: React.FC<Props> = ({
  className = null,
  children = null,
  bgColor = '#2b292a',
  style = {},
}) => {
  const cn = cx(className);

  return (
    <animated.button
      className={cn}
      style={{
        ...style,
        backgroundColor: bgColor,
      }}>
      {children}
    </animated.button>
  );
};

export default Button;
