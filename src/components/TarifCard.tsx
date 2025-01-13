import { FC } from 'react';

interface TarifCardProps {
  title: string;
  description: string;
  price: string;
  imageClassName: string;
}

const TarifCard: FC<TarifCardProps> = ({
  title,
  description,
  price,
  imageClassName,
}) => {
  return (
    <div
      className={`card-tarif col-xs-10 col-sm-10 col-md-5 col-lg-4 col-xl-4 ${imageClassName}`}
    >
      <div className='title'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='tarif-end'>
        <strong>Tarif:</strong>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default TarifCard;
