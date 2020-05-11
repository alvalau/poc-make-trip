import React from 'react';
import {animated} from 'react-spring';
import cx from 'classnames';
import styles from './image.module.scss';

interface Props {
  className?: string;
  src: string;
  style?: object;
  alt: string;
}

const Image: React.FC<Props> = ({className = null, src, style = {}, alt}) => {
  const cn = cx(styles['image'], className);
  return <animated.img className={cn} alt={alt} src={src} style={style} />;
};

export default Image;
