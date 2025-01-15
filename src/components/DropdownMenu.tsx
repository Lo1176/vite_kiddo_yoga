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
      <Link to='/#hatha' className='btn btn-flat list-group-item btn-navbar'>
        Hatha Yoga
      </Link>
      <Link to='/#about-me' className='btn btn-flat list-group-item btn-navbar'>
        About me
      </Link>
      <Link to='/#tarifs' className='btn btn-flat list-group-item btn-navbar'>
        Tarifs
      </Link>
    </div>
  );
};
