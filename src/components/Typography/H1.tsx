import React from 'react';
import {animated} from 'react-spring';
import cx from 'classnames';
import styles from './typography.module.scss';

interface Props {
  children: string;
  className?: string;
  style?: object;
}

const H1: React.FC<Props> = ({children, className, style = {}}) => {
  const cn = cx(styles['typography-h1'], className);
  return (
    <animated.h1 className={cn} style={style}>
      {children}
    </animated.h1>
  );
};

export default H1;
