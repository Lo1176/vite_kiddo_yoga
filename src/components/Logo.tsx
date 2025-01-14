import { FC } from 'react';
import l3 from '../assets/images/l3.svg';

const Logo: FC = () => {
  return (
    // <div className='moving-letters flex-start'>
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
