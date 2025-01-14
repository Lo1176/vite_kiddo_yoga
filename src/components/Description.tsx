import { FC } from 'react';

export const Description: FC = () => {
  return (
    <section id='hatha'>
      <div className='card-area'>
        <div className='title-line'>
          <h3>Hatha-Yoga</h3>
        </div>
        <div className='card-info'>
          <div className='content'>
            <h4>Le Hatha-yoga est le yoga le plus pratiqué en Occident</h4>
            <p>
              Le Hatha-Yoga ou Hathayoga est un terme sanskrit. Ce type de yoga,
              par la pratique précise et rythmée de postures, permet au
              pratiquant une maîtrise du corps et des sens. Il trouve son
              origine dans des textes anciens, les yoga sutras de Patanjali.
              <br />
              Le Hatha-Yoga est un enchaînement de postures,{' '}
              <em>appelées asanas en sanskrit</em>, très simples ou plus
              compliquées.
              <br />
              Comme c'est une discipline qui s'adresse à tout le monde, il
              existe différents niveaux selon que vous soyez débutant ou plus
              expérimenté dans la discipline.
              <br />
              Contrairement à un enchaînement de gymnastique, les postures
              doivent être maintenues suffisamment longtemps (environ 3 minutes
              par posture).
              <br />
              On y associe le contrôle du souffle, <em>pranayama</em>, et la
              concentration.
            </p>
          </div>
          <div className='image-info img-right'>
            <img
              src='https://images.unsplash.com/photo-1508133111629-be3f6e535a52'
              alt='yoga on the beach'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
