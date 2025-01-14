import { FC } from 'react';
import TarifCard from './TarifCard';

export const Tarifs: FC = () => {
  return (
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
  );
};
