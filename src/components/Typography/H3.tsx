import React from 'react';
import cx from 'classnames';
import styles from './typography.module.scss';

interface Props {
  children: string;
  className?: string;
}

const H3: React.FC<Props> = ({children, className}) => {
  const cn = cx(styles['typography-h3'], className);
  return <h1 className={cn}>{children}</h1>;
};

export default H3;
