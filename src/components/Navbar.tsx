import { FC } from 'react';
import BurgerMenu from './BurgerMenu';
import { NavbarLinks } from './NavbarLinks';
import Logo from './Logo';

const Navbar: FC = () => {
  return (
    <div className='navbar navbar-expand-sm navbar-light navbar-lewagon'>
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
