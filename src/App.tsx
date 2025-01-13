import { FC } from 'react';
import ownerImage from './assets/images/beakiddo.png';
import Footer from './components/Footer';
import TarifCard from './components/TarifCard';
import './scss/app.scss';

const App: FC = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div
        className='banner'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1540489648364-fcf95836d808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1660&q=1080)`,
        }}
      >
        <div className='container-title'>
          <h1>Béatrix Kiddo</h1>
          <p>Changez votre vie en pratiquant le yoga.</p>
          <a className='btn btn-flat' href='#about-me'>
            About me
          </a>
        </div>
      </div>

      <div className='container'>
        {/* Hatha Yoga Section */}
        <section id='hatha'>
          <div className='card-area'>
            <div className='title-line'>
              <h3>Hatha-Yoga</h3>
            </div>
            <div className='card-info'>
              <div className='content'>
                <h4>Le Hatha-yoga est le yoga le plus pratiqué en Occident</h4>
                <p>
                  Le Hatha-Yoga ou Hathayoga est un terme sanskrit. Ce type de
                  yoga, par la pratique précise et rythmée de postures, permet
                  au pratiquant une maîtrise du corps et des sens. Il trouve son
                  origine dans des textes anciens, les yoga sutras de Patanjali.
                  <br />
                  Le Hatha-Yoga est un enchaînement de postures,{' '}
                  <em>appelées asanas en sanskrit</em>, très simples ou plus
                  compliquées.
                  <br />
                  Comme c'est une discipline qui s'adresse à tout le monde, il
                  existe différents niveaux selon que vous soyez débutant ou
                  plus expérimenté dans la discipline.
                  <br />
                  Contrairement à un enchaînement de gymnastique, les postures
                  doivent être maintenues suffisamment longtemps (environ 3
                  minutes par posture).
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

        {/* About Me Section */}
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
                  Béatrix a découvert les bienfaits du yoga après avoir pratiqué
                  un art martial de façon intensive, la laissant avec plusieurs
                  tendinites lui interdisant toute pratique sportive.
                  <br />
                  Le yoga lui a permis de soulager ses maux et lui a appris à
                  rentrer en relation avec elle-même, ses capacités physiques et
                  mentales. Il lui a aussi apporté un équilibre émotionnel
                  précieux dans une ville intense comme Paris.
                  {/* Rest of the text */}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs Section */}
        <section id='tarifs'>
          <div className='card-area'>
            <div className='title-line'>
              <h3>Tarifs</h3>
            </div>
            <div className='container-tarif'>
              {/* Repeatable Cards */}
              <TarifCard
                title='Cours collectifs'
                description='Cours collectifs de Hatha Yoga au centre national de l’Art de Vivre à Paris 11ème (Métro Nation, Rue des Boulets).'
                price='Carte de 10 cours : 180 €'
                imageClassName='card-img-a'
              />
              <TarifCard
                title='Cours individuel'
                description='Les cours individuels à domicile pour débutants et yogis confirmés s’adaptent à vos besoins.'
                price='Carte de 10 cours : 180 €'
                imageClassName='card-img-b'
              />
              <TarifCard
                title='Cours en entreprise'
                description='Des séances d’une heure adaptées aux profils et aux objectifs des participants.'
                price='Carte de 10 cours : 180 €'
                imageClassName='card-img-c'
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default App;
