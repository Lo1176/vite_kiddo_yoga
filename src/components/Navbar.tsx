import { FC } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropDownMenu';
import Logo from './Logo';

const Navbar: FC = () => {
  return (
    <div className='navbar navbar-expand-sm navbar-light navbar-lewagon'>
      {/* Burger Menu */}
      <div className='right-navbar burger-to-X'>
        <DropdownMenu />
      </div>

      {/* Logo */}
      <div className='center-logo'>
        {/* Remplacez ce commentaire par un composant Logo si nécessaire */}
        <Logo />
      </div>

      {/* Right Links */}
      <div className='right-navbar extended-menu'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            {/* Exemple d'élément non actif */}
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
    </div>
  );
};

export default Navbar;
