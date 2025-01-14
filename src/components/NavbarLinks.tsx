import { FC } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export const NavbarLinks: FC = () => {
  return (
    <div className='right-navbar extended-menu'>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to='#hatha' className='nav-link'>
              Hatha Yoga
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='#about-me' className='nav-link'>
              About me
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='#tarifs' className='nav-link'>
              Tarifs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
