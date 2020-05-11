import React from 'react';
import styles from './typography.module.scss';
import cx from 'classnames';

interface Props {
  children: string;
  className?: string;
}

const P: React.FC<Props> = ({children, className}) => {
  const cn = cx(styles['typography-p'], className);
  return <p className={cn}>{children}</p>;
};

export default P;
