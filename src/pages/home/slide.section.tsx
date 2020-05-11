import React, {useMemo} from 'react';
import Slider from '../../components/Slider';

const SlideSection: React.FC = () => {
  const SliderData = [
    {
      title: 'Lorem Ipsum',
      uriToImage: require('../../assets/images/slider-item-0.jpeg'),
    },
    {
      title: 'Lorem Ipsum',
      uriToImage: require('../../assets/images/slider-item-1.jpeg'),
    },
    {
      title: 'Lorem Ipsum',
      uriToImage: require('../../assets/images/slider-item-2.jpeg'),
    },
    {
      title: 'Lorem Ipsum',
      uriToImage: require('../../assets/images/slider-item-3.jpeg'),
    },
  ];

  const _memoSlider = useMemo(() => <Slider data={SliderData} />, [SliderData]);

  return _memoSlider;
};

export default SlideSection;
