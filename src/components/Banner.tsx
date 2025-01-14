import { FC } from 'react';

export const Banner: FC = () => {
  return (
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
  );
};
