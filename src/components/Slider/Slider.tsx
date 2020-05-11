import React from 'react';
import styles from './slider.module.scss';
import SliderItem from './SliderItem';

interface ItemProps {
  uriToImage: string;
  title: string;
}

interface Props {
  data?: Array<ItemProps>;
}

const Slider: React.FC<Props> = ({data = []}) => {
  return (
    <div className={styles['slider']}>
      {data.map((item, i) => {
        return <SliderItem key={`item-${i}`} item={item} />;
      })}
    </div>
  );
};

export default Slider;
