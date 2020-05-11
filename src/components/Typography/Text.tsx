import React from 'react';
import styles from './typography.module.scss';

interface Props {
  text: string;
  bold?: boolean;
  toUpper?: boolean;
  style?: object;
}

const Text: React.FC<Props> = ({
  text,
  bold = false,
  toUpper = false,
  style = {},
}) => {
  return (
    <span
      className={styles['typography-text']}
      style={{
        ...style,
        fontWeight: bold ? 'bold' : 'normal',
      }}>
      {toUpper ? text.toUpperCase() : text}
    </span>
  );
};

export default Text;
