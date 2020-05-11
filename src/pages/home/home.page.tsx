import React, {useState, useEffect, useRef} from 'react';
import * as R from 'ramda';
import HeroSection from './hero.section';
import FeaturedSection from './featured.section';
import SlideSection from './slide.section';
import styles from './home.module.scss';
import {animated, useSprings, config} from 'react-spring';
import {useGesture, useDrag} from 'react-use-gesture';

enum Section {
  Hero,
  Featured,
  Slide,
  Footer,
}

const featuredItem = Object.freeze({
  content: {
    title: 'Lorem Ipsum',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  image: {
    urlToImage: require('../../assets/images/featured.jpeg'),
    action: 'Discover Tour',
  },
});

const HomePage: React.FC = () => {
  const currentIndex = useRef(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const FEATURED_Y_OFFSET = windowHeight / 6;

  const [mainSpring, setMainSpring] = useSprings(4, i => ({
    y: i === Section.Featured ? FEATURED_Y_OFFSET : i * windowHeight,
    featuredProgress: 0,
    actionBtnScale: 1.2,
    actionBtnX: -40,
    config: config.slow,
  }));

  const resizeHandler = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const bind = useDrag(
    ({down, movement: [, my], direction: [, yDir], distance, cancel}) => {
      if (down && distance > windowHeight / 5) {
        cancel && cancel();
        if (yDir > 0)
          currentIndex.current = R.clamp(0, 3, currentIndex.current - 1);
        else currentIndex.current = R.clamp(0, 3, currentIndex.current + 1);
        setMainSpring(i => {
          let _y: number;
          if (i === Section.Featured && currentIndex.current) {
            _y = (i - currentIndex.current) * windowHeight;
          } else if (i === Section.Featured) {
            _y = FEATURED_Y_OFFSET;
          } else {
            _y = (i - currentIndex.current) * windowHeight;
          }
          return {
            y: _y,
            featuredProgress: currentIndex.current ? 1 : 0,
            actionBtnScale: currentIndex.current ? 1 : 1.2,
            actionBtnX: currentIndex.current ? 0 : -40,
            config: config.slow,
          };
        });
      }
    }
  );

  const _renderContent = (props: any, i: number) => {
    const style = {
      transform: props.y.interpolate((y: any) => `translate3d(0, ${y}px,0)`),
    };
    const featureCardProps = {
      featuredProgress: props.featuredProgress,
      actionBtnScale: props.actionBtnScale,
      actionBtnX: props.actionBtnX,
    };
    switch (i) {
      case 0:
        return (
          <animated.section
            key={'hero'}
            className={styles['hero']}
            style={style}>
            <HeroSection />
          </animated.section>
        );
      case 1:
        return (
          <animated.section
            className={styles['featured']}
            key={'featured'}
            style={{
              transform: props.y.interpolate(
                (y: any) => `translate3d(0, ${y}px,0)`
              ),
            }}>
            <FeaturedSection
              key={'slide'}
              content={featuredItem.content}
              image={featuredItem.image}
              featureCardProps={featureCardProps}
            />
          </animated.section>
        );
      case 2:
        return (
          <animated.section className={styles['slide']} style={style}>
            <SlideSection />
          </animated.section>
        );
      default:
        break;
    }
  };

  return (
    <div className={styles['home-page']} {...bind()}>
      {mainSpring.map((props, i) => (
        <div key={`home-${i}`}>{_renderContent(props, i)}</div>
      ))}
    </div>
  );
};

export default HomePage;
