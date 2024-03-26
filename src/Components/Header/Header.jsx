import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
  return (
    <div className='nav' id='nav'>
      <div className='logo'>
        <Link to='/'>
          <img src='assets/img/logo1.svg' alt='logo' />
        </Link>
      </div>
      <div className='nav-links'>
        <div className='nav-item'>
          <Link className='nav-link' to='/'>
            Личный кабинет
          </Link>
        </div>
        <div className='nav-item'>
          <Link className='nav-link' to='/History'>
            О нас
          </Link>
        </div>
        <div className='nav-item'>
          <Link className='nav-link' to='/News'>
            Новости и акции
          </Link>
        </div>
        <div className='nav-item'>
          <HashLink className='nav-link' to='/#Contacts'>
            Контакты
          </HashLink>
        </div>
        <div className='nav-item'>
          <Link className='nav-link' to='/Blog'>
            Блог
          </Link>
        </div>
      </div>
      <button className='place'>
        <div className='place__img'></div>
        <p>Гомель</p>
      </button>
    </div>
  );
};
