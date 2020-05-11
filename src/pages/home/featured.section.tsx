import React from 'react';
import {animated, interpolate} from 'react-spring';
import styles from './home.module.scss';
import {H1, P} from '../../components/Typography';
import Image from '../../components/Image';
import Button from '../../components/Button';

interface ContentProps {
  title: string;
  body: string;
}

interface ImageProps {
  action: string;
  urlToImage: string;
}

interface Props {
  content: ContentProps;
  image: ImageProps;
  featureCardProps?: any;
}

const Featured: React.FC<Props> = ({content, image, featureCardProps}) => {
  return (
    <>
      <div className={styles['content-card']}>
        <div className={styles['content']}>
          <H1
            className={styles['title']}
            style={{
              transform:
                featureCardProps &&
                featureCardProps.featuredProgress
                  .interpolate([0, 1], [0.8, 1])
                  .interpolate((p: any) => `scale(${p})`),
            }}>
            {content.title}
          </H1>
          <P className={styles['body']}>{content.body}</P>
        </div>
      </div>
      <animated.div
        className={styles['featured-card']}
        style={{
          transform:
            featureCardProps &&
            featureCardProps.featuredProgress
              .interpolate([0, 1], [0.8, 1])
              .interpolate((p: any) => `scale(${p})`),
        }}>
        <div className={styles['image-mask']}>
          <Image
            className={styles['featured-card-image']}
            src={image.urlToImage}
            alt="featured-image"
            style={{
              transform:
                featureCardProps &&
                featureCardProps.featuredProgress
                  .interpolate([0, 1], [1, 1.25])
                  .interpolate((p: any) => `scale(${p})`),
            }}
          />
        </div>
        <Button
          className={styles['featured-card-action']}
          style={{
            transform:
              featureCardProps &&
              interpolate(
                [featureCardProps.actionBtnScale, featureCardProps.actionBtnX],
                (s: any, x: any) => `scale(${s}) translate3d(${x}px, 0, 0)`
              ),
          }}>
          {image.action}
        </Button>
      </animated.div>
    </>
  );
};

export default Featured;
