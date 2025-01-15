import { FC } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

interface DropdownMenuProps {
  ariaLabelledBy: string;
  isOpen: boolean;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
  ariaLabelledBy,
  isOpen,
}) => {
  return (
    <div
      className={`dropdown-menu ${isOpen ? 'show' : ''}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className='dropdown-divider'></div>
      <Link to='/#hatha'>Hatha Yoga</Link>
      <Link to='/#about-me'>About me</Link>
      <Link to='/#tarifs'>Tarifs</Link>
    </div>
  );
};
