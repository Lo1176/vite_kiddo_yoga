import anime from 'animejs';
import { FC, useEffect } from 'react';
import l3 from '../assets/images/l3.svg';

const Logo: FC = () => {
  useEffect(() => {
    // Anime.js: Ajouter des animations similaires à ce qui était prévu dans le script d'origine
    anime
      .timeline({ loop: true })
      .add({
        targets: '.line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeInOutExpo',
        duration: 900,
      })
      .add({
        targets: '.letters-left',
        opacity: [0, 1],
        translateX: ['-100%', 0],
        easing: 'easeInOutExpo',
        duration: 900,
        offset: '-=300',
      })
      .add({
        targets: '.letters-right',
        opacity: [0, 1],
        translateX: ['100%', 0],
        easing: 'easeInOutExpo',
        duration: 900,
        offset: '-=600',
      });
  }, []);

  return (
    <div className='moving-letters flex-start'>
      <a href='/' className='link'>
        <h1>
          <span className='text-wrapper'>
            <span className='line line1'></span>
            <span className='letters letters-left'>Hatha</span>
            <span className='letters ampersand'>
              <img src={l3} alt='&' />
            </span>
            <span className='letters letters-right'>Yoga</span>
            <span className='line line2'></span>
          </span>
        </h1>
      </a>
    </div>
  );
};

export default Logo;
