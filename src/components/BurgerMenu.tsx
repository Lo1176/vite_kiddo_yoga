import Burger from 'hamburger-react';
import { useState } from 'react';
import { DropdownMenu } from './DropdownMenu';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        role='button'
        type='button'
        className='btn'
        data-toggle='dropdown'
        id='dropdownMenuButton'
      >
        <Burger toggled={isOpen} toggle={setIsOpen} label='burger button' />
        {/* <button
        className='btn btn-secondary dropdown-toggle'
        type='button'
        id='dropdownMenuButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Dropdown button
      </button>
      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
        <a className='dropdown-item' href='#'>
          Action
        </a>
        <a className='dropdown-item' href='#'>
          Another action
        </a>
        <a className='dropdown-item' href='#'>
          Something else here
        </a>
      </div> */}
      </button>
      {isOpen && (
        <DropdownMenu isOpen={isOpen} ariaLabelledBy={dropdownMenuButton} />
      )}
      {console.log('🚀 ~ BurgerMenu ~ isOpen:', isOpen)}{' '}
    </>
  );
};

export default BurgerMenu;
