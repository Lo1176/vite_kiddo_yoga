import { FC } from 'react';
import ownerImage from '../assets/images/beakiddo.png';

export const About: FC = () => {
  return (
    <section id='about-me'>
      <div className='card-area'>
        <div className='title-line'>
          <h3>About me</h3>
        </div>
        <div className='card-info'>
          <div className='content'>
            <div className='avatar-image'>
              <img src={ownerImage} alt='avatar' className='avatar-large' />
            </div>
            <h4>Béatrix Kiddo</h4>
            <p>
              Béatrix a découvert les bienfaits du yoga après avoir pratiqué un
              art martial de façon intensive, la laissant avec plusieurs
              tendinites lui interdisant toute pratique sportive.
              <br />
              Le yoga lui a permis de soulager ses maux et lui a appris à
              rentrer en relation avec elle-même, ses capacités physiques et
              mentales. Il lui a aussi apporté un équilibre émotionnel précieux
              dans une ville intense comme Paris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
