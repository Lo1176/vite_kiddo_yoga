import { FC } from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import { NavbarLinks } from './NavbarLinks';

const Navbar: FC = () => {
  return (
    <div className='navbar navbar-expand-sm navbar-light navbar-yoga'>
      <div className='right-navbar burger-to-X'>
        <BurgerMenu />
      </div>

      <div className='center-logo'>
        <Logo />
      </div>

      <NavbarLinks />
    </div>
  );
};

export default Navbar;
