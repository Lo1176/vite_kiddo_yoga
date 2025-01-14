import { useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => {
      return !prev;
    });
    console.log('🚀 ~ toggleDropdown ~ isOpen:', isOpen);
  };

  return (
    <div className='btn-group'>
      <button
        type='button'
        className='list-group-item'
        onClick={toggleDropdown}
        aria-haspopup='true'
        aria-expanded={isOpen}
      >
        <div className='nav-icon'>
          <div className='burger-menu' />
        </div>
      </button>
      {isOpen && (
        <div className='dropdown-menu'>
          <p>toto</p>
          <p>toto2</p>
          <p>toto3</p>
          <Link
            to='/#hatha'
            className='btn btn-flat list-group-item btn-navbar'
          >
            Hatha Yoga
          </Link>
          <Link
            to='/#about-me'
            className='btn btn-flat list-group-item btn-navbar'
          >
            About me
          </Link>
          <Link
            to='/#tarifs'
            className='btn btn-flat list-group-item btn-navbar'
          >
            Tarifs
          </Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
