import React, {useCallback} from 'react';
import styles from './logo.module.scss';

interface Props {
  onClick?: () => void;
}

const Logo: React.FC<Props> = ({onClick = null}) => {
  const _handleOnClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);
  return (
    <div className={styles['logo']} onClick={_handleOnClick}>
      <span className={styles['make']}>Make</span>&nbsp;
      <span className={styles['trip']}>Trip</span>
    </div>
  );
};

export default Logo;
