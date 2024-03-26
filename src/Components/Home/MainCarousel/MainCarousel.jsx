import './MainCarousel.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import carouselData from './carouselData.json';
import './MainCarousel.css';
import { Controller } from 'swiper/modules';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export const MainCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const progressCircle = useRef(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        {carouselData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className='mainCarousel-cards-card'>
              <div className='mainCarousel-cards-left'>
                <h1 className='mainCarousel-cards-card__h1'>{card.title}</h1>
                <button className='mainCarousel-cards-card__button'>
                  {card.buttonText}
                </button>
                <div className='mainCarousel__links'>
                  {card.socialLinks.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      className={`mainCarousel__links__a ${link.className}`}
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    ></a>
                  ))}
                </div>
              </div>
              <p className='mainCarousel-cards-card__phone'>{card.phone}</p>
              <img
                className={`mainCarousel-cards-card__img mainCarousel-cards-card__img${activeIndex}`}
                src={card.image}
                alt={card.imageAlt}
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          className={`autoplay-progress autoplay-custom-${activeIndex}`}
          slot='container-end'
        >
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
        </div>
      </Swiper>
    </>
    // <div className='mainCarousel'>
    //   <div className='mainCarousel-dots'>
    //     <button className='mainCarousel-dots__dot'>1</button>
    //     <button className='mainCarousel-dots__dot'>2</button>
    //     <button className='mainCarousel-dots__dot'>3</button>
    //     <button className='mainCarousel-dots__dot'>4</button>
    //     <button className='mainCarousel-dots__dot'>5</button>
    //     <button className='mainCarousel-dots__dot'>6</button>
    //   </div>
    //   <div className='mainCarousel-cards'>
    //     <div className='mainCarousel-cards-card'>
    //       <div className='mainCarousel-cards-left'>
    //         <h1 className='mainCarousel-cards-card__h1'>
    //           Айболит круглосуточная ветклиника
    //         </h1>
    //         <button className='mainCarousel-cards-card__button'>
    //           ЗАПИСАТЬСЯ
    //         </button>
    //         <div className='mainCarousel__links'>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a1'
    //             href='https://www.instagram.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a2'
    //             href='https://www.facebook.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a3'
    //             href='https://www.vk.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a4'
    //             href='https://www.youtube.com/'
    //             target='_blank'
    //           ></a>
    //         </div>
    //       </div>
    //       <p className='mainCarousel-cards-card__phone'>+7 (8442) 96 22 92</p>
    //       <img
    //         className='mainCarousel-cards-card__img mainCarousel-cards-card__img1'
    //         src='/assets/img/catdog.png'
    //         alt='catdog'
    //       />
    //     </div>
    //     <div className='mainCarousel-cards-card'>
    //       <div className='mainCarousel-cards-left'>
    //         <h1 className='mainCarousel-cards-card__h1'>
    //           Комфортные оборудованные стационары
    //         </h1>
    //         <button className='mainCarousel-cards-card__button'>
    //           ЗАПИСАТЬСЯ
    //         </button>
    //         <div className='mainCarousel__links'>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a1'
    //             href='https://www.instagram.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a2'
    //             href='https://www.facebook.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a3'
    //             href='https://www.vk.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a4'
    //             href='https://www.youtube.com/'
    //             target='_blank'
    //           ></a>
    //         </div>
    //       </div>
    //       <p className='mainCarousel-cards-card__phone'>+7 (8442) 96 22 92</p>
    //       <img
    //         className='mainCarousel-cards-card__img mainCarousel-cards-card__img2'
    //         src='/assets/img/mandog.png'
    //         alt='catdog'
    //       />
    //     </div>
    //     <div className='mainCarousel-cards-card'>
    //       <div className='mainCarousel-cards-left'>
    //         <h1 className='mainCarousel-cards-card__h1'>
    //           Новейшее европейское оборудование
    //         </h1>
    //         <button className='mainCarousel-cards-card__button'>
    //           ЗАПИСАТЬСЯ
    //         </button>
    //         <div className='mainCarousel__links'>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a1'
    //             href='https://www.instagram.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a2'
    //             href='https://www.facebook.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a3'
    //             href='https://www.vk.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a4'
    //             href='https://www.youtube.com/'
    //             target='_blank'
    //           ></a>
    //         </div>
    //       </div>
    //       <p className='mainCarousel-cards-card__phone'>+7 (8442) 96 22 92</p>
    //       <img
    //         className='mainCarousel-cards-card__img mainCarousel-cards-card__img3'
    //         src='/assets/img/dogvet.png'
    //         alt='catdog'
    //       />
    //     </div>
    //     <div className='mainCarousel-cards-card'>
    //       <div className='mainCarousel-cards-left'>
    //         <h1 className='mainCarousel-cards-card__h1'>
    //           Собственная современная лаборатория
    //         </h1>
    //         <button className='mainCarousel-cards-card__button'>
    //           ЗАПИСАТЬСЯ
    //         </button>
    //         <div className='mainCarousel__links'>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a1'
    //             href='https://www.instagram.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a2'
    //             href='https://www.facebook.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a3'
    //             href='https://www.vk.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a4'
    //             href='https://www.youtube.com/'
    //             target='_blank'
    //           ></a>
    //         </div>
    //       </div>
    //       <p className='mainCarousel-cards-card__phone'>+7 (8442) 96 22 92</p>
    //       <img
    //         className='mainCarousel-cards-card__img mainCarousel-cards-card__img4'
    //         src='/assets/img/rabbit.png'
    //         alt='catdog'
    //       />
    //     </div>
    //     <div className='mainCarousel-cards-card'>
    //       <div className='mainCarousel-cards-left'>
    //         <h1 className='mainCarousel-cards-card__h1'>
    //           Аптека и зоомагазин по доступным ценам
    //         </h1>
    //         <button className='mainCarousel-cards-card__button'>
    //           ЗАПИСАТЬСЯ
    //         </button>
    //         <div className='mainCarousel__links'>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a1'
    //             href='https://www.instagram.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a2'
    //             href='https://www.facebook.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a3'
    //             href='https://www.vk.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a4'
    //             href='https://www.youtube.com/'
    //             target='_blank'
    //           ></a>
    //         </div>
    //       </div>
    //       <p className='mainCarousel-cards-card__phone'>+7 (8442) 96 22 92</p>
    //       <img
    //         className='mainCarousel-cards-card__img mainCarousel-cards-card__img5'
    //         src='/assets/img/cat.png'
    //         alt='catdog'
    //       />
    //     </div>
    //     <div className='mainCarousel-cards-card'>
    //       <div className='mainCarousel-cards-left'>
    //         <h1 className='mainCarousel-cards-card__h1'>
    //           Груминг салон и косметические товары
    //         </h1>
    //         <button className='mainCarousel-cards-card__button'>
    //           ЗАПИСАТЬСЯ
    //         </button>
    //         <div className='mainCarousel__links'>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a1'
    //             href='https://www.instagram.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a2'
    //             href='https://www.facebook.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a3'
    //             href='https://www.vk.com/'
    //             target='_blank'
    //           ></a>
    //           <a
    //             className='mainCarousel__links__a mainCarousel__links__a4'
    //             href='https://www.youtube.com/'
    //             target='_blank'
    //           ></a>
    //         </div>
    //       </div>
    //       <p className='mainCarousel-cards-card__phone'>+7 (8442) 96 22 92</p>
    //       <img
    //         className='mainCarousel-cards-card__img mainCarousel-cards-card__img6'
    //         src='/assets/img/puppies.png'
    //         alt='catdog'
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};
