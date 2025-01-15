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
        className='btn burger-btn'
        data-toggle='dropdown'
        id='dropdownMenuButton'
      >
        <Burger toggled={isOpen} toggle={setIsOpen} label='burger button' />
      </button>
      {isOpen && (
        <DropdownMenu isOpen={isOpen} ariaLabelledBy='dropdownMenuButton' />
      )}
    </>
  );
};

export default BurgerMenu;
