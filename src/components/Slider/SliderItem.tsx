import React from 'react';
import styles from './slider.module.scss';
import Image from '../Image';
import H3 from '../Typography/H3';

interface SliderItemProps {
  uriToImage: string;
  title: string;
}

interface ItemProps {
  item: SliderItemProps;
  style?: object;
}

const ActionBtn = () => {
  return <div className={styles['action-btn']}>Discover Tour</div>;
};

const SliderItem: React.FC<ItemProps> = ({item, style = {}}) => {
  return (
    <div className={styles['slider-item--root']}>
      <div className={styles['slider-item-bg']} />
      <Image
        className={styles['slider-item-image']}
        alt={`image-${item.title}`}
        src={item.uriToImage}
      />
      <div className={styles['meta']}>
        <H3>{item.title}</H3>
        <ActionBtn />
      </div>
    </div>
  );
};

export default SliderItem;
