import React from 'react';
import { MainCarousel } from './MainCarousel/MainCarousel';
import transition from '../../transition';
import { Uslugi } from './Uslugi/Uslugi';
import './Home.css';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import whyUsItems from './whyUsItems.json';

export const Home = () => {
  return (
    <div>
      <MainCarousel></MainCarousel>
      <Uslugi></Uslugi>
      <section className='aboutcompany' id='history-back'>
        <div>
          <h3 className='aboutcompany__h3'>История компании</h3>
          <p className='aboutcompany__p'>
            История компании начинается 14 января 1999 года, когда было
            образовано ООО «Чижи». Идея пришла, т.к. у основателя компании
            Прозор Жанны Георгиевны была собака боксёр по кличке Бард…
          </p>
          <HashLink to='/History#nav' className='aboutcompany__link'>
            <p className='aboutcompany__linkp'>ЧИТАТЬ ДАЛЕЕ</p>
            <img
              src='assets/img/arrownext.svg'
              alt='arr'
              className='aboutcompany-link__img'
            />
          </HashLink>
        </div>
        <div>
          <h3 className='aboutcompany__h3 mt100'>Наши специалисты</h3>
          <div className='aboutcompany__slider'>
            <div className='aboutcompany__slides'></div>
            <div className='aboutcompany__arrows'></div>
          </div>
          <HashLink to='/Specialists#nav' className='aboutcompany__link'>
            <p className='aboutcompany__linkp'>ПОСМОТРЕТЬ ВСЕХ</p>
            <img
              src='assets/img/arrownext.svg'
              alt='arr'
              className='aboutcompany-link__img'
            />
          </HashLink>
        </div>
      </section>
      <section className='helped'>
        <h2 className='helped__count'>1 150 000</h2>
        <h3 className='helped__h2'>питомцам мы помогли за 18 лет работы</h3>
        <img
          src='assets/img/yellowbird.png'
          alt='bird'
          className='yellowbird'
        />
      </section>
      <section className='whyus'>
        <h3 className='whyus__h3'>Почему хозяева выбирают нас?</h3>
        <div className='whyus-grid'>
          {whyUsItems.map((item, index) => (
            <div key={index} className='whyus-grid-block'>
              <div className='whyus-elem'>
                <h4 className='whyus__h4'>{item.title}</h4>
                <div className='whyus-elem-bottom'>
                  <img src={item.image} alt='img' className='whyus__img' />
                  <p className='whyus__p'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='newapp'>
        <div className='newapp-left'>
          <p className='newapp__p'>скоро</p>
          <h3 className='newapp__h3'>
            Удобное приложение для питомцев и <br />
            их хозяев
          </h3>
          <div className='mobile-download' style={{ marginTop: 42 }}>
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
        </div>
        <img
          src='assets/img/appanddog.png'
          alt='appanddog'
          className='appanddog'
        />
      </section>
      <section className='contacts'>
        <h5 className='contacts__h5' id='Contacts'>
          Контакты
        </h5>
        <div className='contacts-main'>
          <div className='contacts-left'>
            <div className='contacts-first'>
              <h6 className='contacts__h6'>Айболит на Краснополянской</h6>
              <div className='contacts-info'>
                <div className='contacts-info-elem'>
                  <img
                    src='assets/img/icogeo.svg'
                    alt='geo'
                    className='contacts__ico'
                  />
                  <p className='contacts__p'>
                    Дзержинский район, <br />
                    ул. Краснополянская, 30
                  </p>
                </div>
                <div className='contacts-info-elem'>
                  <img
                    src='assets/img/icophone.svg'
                    alt='geo'
                    className='contacts__ico'
                  />
                  <p className='contacts__p'>96 22 92</p>
                </div>
                <div className='contacts-info-elem'>
                  <img
                    src='assets/img/icoclock.svg'
                    alt='geo'
                    className='contacts__ico'
                  />
                  <p className='contacts__p'>Круглосуточно</p>
                </div>
              </div>
            </div>
            <div className='contacts-second'>
              <h6 className='contacts__h6' style={{ marginTop: 40 }}>
                Айболит на Тулака
              </h6>
              <div className='contacts-info'>
                <div className='contacts-info-elem'>
                  <img
                    src='assets/img/icogeo.svg'
                    alt='geo'
                    className='contacts__ico'
                  />
                  <p className='contacts__p'>
                    Советский район, <br />
                    ул. Карла Маркса, 7
                  </p>
                </div>
                <div className='contacts-info-elem'>
                  <img
                    src='assets/img/icophone.svg'
                    alt='geo'
                    className='contacts__ico'
                  />
                  <p className='contacts__p'>96 22 92</p>
                </div>
                <div className='contacts-info-elem'>
                  <img
                    src='assets/img/icoclock.svg'
                    alt='geo'
                    className='contacts__ico'
                  />
                  <p className='contacts__p'>Круглосуточно</p>
                </div>
              </div>
            </div>
          </div>
          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3Abd22dc9c0ba7bd6797ad1fffd7c2f5b3519782e1dc81710ec30d52d5440244fc&amp;source=constructor'
            width='950'
            height='526'
            // frameBorder='0'
          ></iframe>
        </div>
      </section>
    </div>
  );
};
export default transition(Home);
