import React from 'react';
import styles from './home.module.scss';

const Hero: React.FC = () => {
  const social = [
    {svgImage: require('../../materials/icon/svg-fb.svg'), name: 'fb'},
    {svgImage: require('../../materials/icon/svg-instagram.svg'), name: 'ig'},
    {svgImage: require('../../materials/icon/svg-linkedin.svg'), name: 'li'},
    {svgImage: require('../../materials/icon/svg-twitter.svg'), name: 'tw'},
  ];
  return (
    <>
      <div className={styles['bg-pic']}></div>
      <ul className={styles['social']}>
        {social.map(e => {
          return (
            <img
              className={styles['social-icon']}
              key={e.name}
              alt={e.name}
              src={e.svgImage}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Hero;
