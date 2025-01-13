import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <a
          href='https://www.linkedin.com/in/laurent-binder/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-instagram'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/laurent-binder/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-facebook'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/laurent-binder/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-twitter'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/laurent-binder/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <div className='footer-link-credit'>
        <a
          href='https://www.linkedin.com/in/laurent-binder/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='footer-copyright large-devise'>
            This Website is made with <i className='fas fa-heart'></i> by Lo
          </div>
          <div className='footer-copyright small-devise'>made by Lo</div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
