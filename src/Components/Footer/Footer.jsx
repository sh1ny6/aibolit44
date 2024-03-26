import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <HashLink className='footer-logo-link' to='#nav'>
          {/* ili to='/#nav' */}
          <div className='footer-logo__img'></div>
          <div className='footer-logo__text'>
            <h3 className='footer-logo__h3'>Айболит</h3>
            <p className='footer-logo__p footer-basictext'>
              ветеринарная клиника
            </p>
          </div>
        </HashLink>
        <div className='footer-left-bottom'>
          <div className='footer-left-bottom-block' style={{ marginLeft: 112 }}>
            <HashLink
              style={{ width: 200 }}
              className='footer-left-bottom-block__link footer-basictext'
              to='/#nav'
            >
              Политика конфиденциальности в отношении обработки персональных
              данных
            </HashLink>
          </div>
          <div className='footer-left-bottom-block'>
            <HashLink
              className='footer-left-bottom-block__link footer-basictext'
              to='/#nav'
            >
              Главная
            </HashLink>
            <HashLink
              to='/Products#nav'
              className='footer-left-bottom-block__link footer-basictext'
            >
              Услуги и цены
            </HashLink>
            <HashLink
              to='/History#nav'
              className='footer-left-bottom-block__link footer-basictext'
            >
              История компании
            </HashLink>
            <HashLink
              to='/Specialists#nav'
              className='footer-left-bottom-block__link footer-basictext'
            >
              Наши специалисты
            </HashLink>
            <Link className='footer-left-bottom-block__link footer-basictext'>
              Вакансии
            </Link>
            <Link className='footer-left-bottom-block__link footer-basictext'>
              Реквизиты
            </Link>
            <Link className='footer-left-bottom-block__link footer-basictext'>
              Онлайн-оплата
            </Link>
          </div>
          <div className='footer-left-bottom-block'>
            <HashLink
              to='/Specialists/Specialist#reply'
              className='footer-left-bottom-block__link footer-basictext'
            >
              Отзывы
            </HashLink>
            <HashLink
              to='/#Contacts'
              className='footer-left-bottom-block__link footer-basictext'
            >
              Контакты
            </HashLink>
            <Link className='footer-left-bottom-block__link footer-basictext'>
              Груминг-салон
            </Link>
            <Link className='footer-left-bottom-block__link footer-basictext'>
              Косметика
            </Link>
            <HashLink
              to='/News#nav'
              className='footer-left-bottom-block__link footer-basictext'
            >
              Новости и акции
            </HashLink>
            <HashLink
              to='/Blog#nav'
              className='footer-left-bottom-block__link footer-basictext'
            >
              Блог
            </HashLink>
          </div>
        </div>
      </div>
      <div className='footer-right'>
        <div className='mobile-download'>
          <a href='#'>
            <img
              className='mobile-download__img'
              src='assets/img/applestore.png'
              alt='applestore'
              style={{ paddingTop: 12, paddingBottom: 12, marginRight: 13 }}
            />
          </a>
          <a href='#'>
            <img
              className='mobile-download__img'
              src='assets/img/googleplay.png'
              alt='googleplay'
            />
          </a>
        </div>
        <div className='socials'>
          <a href='#'>
            <div className='social-ico social__inst'></div>
          </a>
          <a href='#'>
            <div className='social-ico social__fb'></div>
          </a>
          <a href='#'>
            <div className='social-ico social__vk'></div>
          </a>
          <a href='#'>
            <div className='social-ico social__yt'></div>
          </a>
        </div>
        <div className='footer-contacts'>
          <a className='footer-basictext' href='#'>
            aibolit34.ru
          </a>
          <a className='footer-basictext' href='#'>
            aibolit34@gmail.com
          </a>
        </div>
        <p className='footer-basictext'>
          Made with{' '}
          <span>
            <img
              src='assets/img/blackheart.png'
              alt='love'
              className='blackheart'
            />
          </span>{' '}
          from UnitBean
        </p>
      </div>
    </div>
  );
};
