import React from 'react';
import './Specialist.css';
import { HashLink } from 'react-router-hash-link';

export const Specialist = () => {
  return (
    <section className='specialist'>
      <div className='spec-left'>
        <img src='../assets/img/smain.png' alt='spec' />
        <p className='spec-time'>ближайшая дата приема: 29.08.19</p>
        <button className='spec-sign'>ЗАПИСАТЬСЯ</button>
        <button className='spec-review'>ОСТАВИТЬ ОТЗЫВ</button>
      </div>
      <div className='spec-right'>
        <HashLink to='/Specialists#specialists' className='spec-back'>
          <img
            src='../assets/img/arrowback.svg'
            alt='arrow'
            style={{ marginRight: 5 }}
          />
          <p className='spec-back__p'>НАЗАД</p>
        </HashLink>
        <h3 className='spec__h3'>Иванова Анастасия Андреевна</h3>
        <p className='spec__p2 mb30'>стаж 10 лет</p>
        <p className='spec__p mb30'>
          Терапия, УЗИ-диагностика, хирургия, ортопедия
        </p>
        <p className='spec__p mb30'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
        <p className='spec__p mb20'>Пройденные курсы</p>
        <div className='spec-awards'>
          <div className='spec-awards-block'>
            <p className='spec-awards__time'>2015</p>
            <p className='spec-awards__award'>Повышение квалификации</p>
          </div>
          <div className='spec-awards-block'>
            <p className='spec-awards__time'>2015</p>
            <p className='spec-awards__award'>Название курса</p>
          </div>
          <div className='spec-awards-block'>
            <p className='spec-awards__time'>2015</p>
            <p className='spec-awards__award'>
              Международная конференция Конференция
            </p>
          </div>
          {/* <div className='spec-awards-block'>
            <p className='spec-awards__time'>2015</p>
            <p className='spec-awards__award'>
              Обучение по направлению хирургия
            </p>
          </div> */}
        </div>
        <div className='spec-plusblock' style={{ marginBottom: 30 }}>
          <div>
            <h3 className='spec__h3' id='reply'>Отзывы</h3>
            <p className='spec__p2'>101 отзыв</p>
          </div>
          <div className='spec-num'>
            <button className='spec-num__page text-color'>1</button>
            <button className='spec-num__page'>2</button>
            <button className='spec-num__page'>3</button>
            <button className='spec-num__page'>4</button>
          </div>
        </div>
        <div className='spec-reviews'>
          <div className='spec-reviews-block'>
            <div style={{ marginRight: 30 }}>
              <img src='../assets/img/s1.png' alt='img' />
            </div>
            <div className='spec-reviews-block-right'>
              <div className='mb20 spec-emoji'>
                <div>
                  <p className='spec__p3 mb10'>пользователь</p>
                  <p className='spec__user' id='user'>
                    Виктория
                  </p>
                </div>
                <img src='../assets/img/emoji1.png' alt='emoji' />
              </div>
              <p className='spec__p3 mb10'>отзыв</p>
              <p className='spec__p' id='review-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum,
                Lorem ip
              </p>
              <div className='spec-reply'>
                <div style={{ marginRight: 30 }}>
                  <img src='../assets/img/s5.png' alt='img' />
                </div>
                <div className='spec-reply__text'>
                  <p className='spec__p3 mb10'>ответ</p>
                  <p className='spec__p' id='review-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='spec-reviews-block'>
            <div style={{ marginRight: 30 }}>
              <img src='../assets/img/s2.png' alt='img' />
            </div>
            <div className='spec-reviews-block-right'>
              <div className='mb20 spec-emoji'>
                <div>
                  <p className='spec__p3 mb10'>пользователь</p>
                  <p className='spec__user' id='user'>
                    Виктория
                  </p>
                </div>
                <img src='../assets/img/emoji2.png' alt='emoji' />
              </div>
              <p className='spec__p3 mb10'>отзыв</p>
              <p className='spec__p' id='review-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className='spec-reply'>
                <div style={{ marginRight: 30 }}>
                  <img src='../assets/img/s5.png' alt='img' />
                </div>
                <div className='spec-reply__text'>
                  <p className='spec__p3 mb10'>ответ</p>
                  <p className='spec__p' id='review-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='spec-reviews-block'>
            <div style={{ marginRight: 30 }}>
              <img src='../assets/img/s3.png' alt='img' />
            </div>
            <div className='spec-reviews-block-right'>
              <div className='mb20 spec-emoji'>
                <div>
                  <p className='spec__p3 mb10'>пользователь</p>
                  <p className='spec__user' id='user'>
                    Виктория
                  </p>
                </div>
                <img src='../assets/img/emoji3.png' alt='emoji' />
              </div>
              <p className='spec__p3 mb10'>отзыв</p>
              <p className='spec__p' id='review-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className='spec-reply'>
                <div style={{ marginRight: 30 }}>
                  <img src='../assets/img/s5.png' alt='img' />
                </div>
                <div className='spec-reply__text'>
                  <p className='spec__p3 mb10'>ответ</p>
                  <p className='spec__p' id='review-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='spec-reviews-block'>
            <div style={{ marginRight: 30 }}>
              <img src='../assets/img/s4.png' alt='img' />
            </div>
            <div className='spec-reviews-block-right'>
              <div className='mb20 spec-emoji'>
                <div>
                  <p className='spec__p3 mb10'>пользователь</p>
                  <p className='spec__user' id='user'>
                    Виктория
                  </p>
                </div>
                <img src='../assets/img/emoji4.png' alt='emoji' />
              </div>
              <p className='spec__p3 mb10'>отзыв</p>
              <p className='spec__p' id='review-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className='spec-reply'>
                <div style={{ marginRight: 30 }}>
                  <img src='../assets/img/s5.png' alt='img' />
                </div>
                <div className='spec-reply__text'>
                  <p className='spec__p3 mb10'>ответ</p>
                  <p className='spec__p' id='review-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='spec-num2' style={{ marginTop: 24 }}>
          <button className='spec-num__page text-color'>1</button>
          <button className='spec-num__page'>2</button>
          <button className='spec-num__page'>3</button>
          <button className='spec-num__page'>4</button>
        </div>
      </div>
    </section>
  );
};
