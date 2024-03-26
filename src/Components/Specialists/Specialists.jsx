import React from 'react';
import './Specialists.css';
import { HashLink } from 'react-router-hash-link';

export const Specialists = () => {
  return (
    <section className='specs'>
      <div className='specs-left'>
        <h2 className='specs__h2'>Коллектив</h2>
        <div className='specs-nav'>
          <HashLink to='/Specialists#about-us'>
            <p className='specs-nav__elem'>О НАС</p>
          </HashLink>
          <HashLink to='/Specialists#specialists'>
            <p className='specs-nav__elem'>СПЕЦИАЛИСТЫ</p>
          </HashLink>
        </div>
      </div>
      <div className='specs-right'>
        <img src='assets/img/specsimg.png' alt='img' />
        <h3 className='specs__h3 mt50 mb30' id='about-us'>
          О нас
        </h3>
        <p className='specs__p mb100'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <h3 className='specs__h3 mb50' id='specialists'>
          Специалисты
        </h3>
        <div className='specs-grid'>
          <HashLink
            className='specs-grid__elem'
            to='/Specialists/Specialist#nav'
          >
            <div className='specs-grid__elem-left'>
              <img src='assets/img/specsuper1.png' alt='img' />
              <p className='specs__p1'>стаж 10 лет</p>
            </div>
            <div className='specs-grid__elem-right'>
              <p className='specs__p2'>врач</p>
              <p className='specs__phard mb20'>
                Иванова
                <br /> Анастасия Андреевна
              </p>
              <p className='specs__p2'>специализация</p>
              <p className='specs__phard'>
                Терапия, УЗИ-диагностика, хирургия, ортопедия, лаборатория
              </p>
            </div>
          </HashLink>

          <HashLink
            className='specs-grid__elem'
            to='/Specialists/Specialist#nav'
          >
            <div className='specs-grid__elem-left'>
              <img src='assets/img/specsuper2.png' alt='img' />
              <p className='specs__p1'>стаж 5 лет</p>
            </div>
            <div className='specs-grid__elem-right'>
              <p className='specs__p2'>врач</p>
              <p className='specs__phard mb20'>
                Константинопольский Константин Константинович
              </p>
              <p className='specs__p2'>специализация</p>
              <p className='specs__phard'>Врач общей практики</p>
            </div>
          </HashLink>
          <HashLink
            className='specs-grid__elem'
            to='/Specialists/Specialist#nav'
          >
            <div className='specs-grid__elem-left'>
              <img src='assets/img/specsuper3.png' alt='img' />
              <p className='specs__p1'>стаж 4 года</p>
            </div>
            <div className='specs-grid__elem-right'>
              <p className='specs__p2'>врач</p>
              <p className='specs__phard mb20'>
                Иванова
                <br /> Анастасия Андреевна
              </p>
              <p className='specs__p2'>специализация</p>
              <p className='specs__phard'>
                Терапия, УЗИ-диагностика, хирургия, ортопедия, лаборатория
              </p>
            </div>
          </HashLink>
          <HashLink
            className='specs-grid__elem'
            to='/Specialists/Specialist#nav'
          >
            <div className='specs-grid__elem-left'>
              <img src='assets/img/specsuper4.png' alt='img' />
              <p className='specs__p1'>стаж 8 месяцев</p>
            </div>
            <div className='specs-grid__elem-right'>
              <p className='specs__p2'>врач</p>
              <p className='specs__phard mb20'>
                Константинопольский Константин Константинович
              </p>
              <p className='specs__p2'>специализация</p>
              <p className='specs__phard'>Врач общей практики</p>
            </div>
          </HashLink>
          <HashLink
            className='specs-grid__elem'
            to='/Specialists/Specialist#nav'
          >
            <div className='specs-grid__elem-left'>
              <img src='assets/img/specsuper1.png' alt='img' />
              <p className='specs__p1'>стаж 10 лет</p>
            </div>
            <div className='specs-grid__elem-right'>
              <p className='specs__p2'>врач</p>
              <p className='specs__phard mb20'>
                Иванова
                <br /> Анастасия Андреевна
              </p>
              <p className='specs__p2'>специализация</p>
              <p className='specs__phard'>
                Терапия, УЗИ-диагностика, хирургия, ортопедия, лаборатория
              </p>
            </div>
          </HashLink>

          <HashLink
            className='specs-grid__elem'
            to='/Specialists/Specialist#nav'
          >
            <div className='specs-grid__elem-left'>
              <img src='assets/img/specsuper2.png' alt='img' />
              <p className='specs__p1'>стаж 5 лет</p>
            </div>
            <div className='specs-grid__elem-right'>
              <p className='specs__p2'>врач</p>
              <p className='specs__phard mb20'>
                Константинопольский Константин Константинович
              </p>
              <p className='specs__p2'>специализация</p>
              <p className='specs__phard'>Врач общей практики</p>
            </div>
          </HashLink>
          <HashLink
            className='specs-grid__elem'
            to='/Specialists/Specialist#nav'
          >
            <div className='specs-grid__elem-left'>
              <img src='assets/img/specsuper3.png' alt='img' />
              <p className='specs__p1'>стаж 4 года</p>
            </div>
            <div className='specs-grid__elem-right'>
              <p className='specs__p2'>врач</p>
              <p className='specs__phard mb20'>
                Иванова
                <br /> Анастасия Андреевна
              </p>
              <p className='specs__p2'>специализация</p>
              <p className='specs__phard'>
                Терапия, УЗИ-диагностика, хирургия, ортопедия, лаборатория
              </p>
            </div>
          </HashLink>
          <HashLink
            className='specs-grid__elem'
            to='/Specialists/Specialist#nav'
          >
            <div className='specs-grid__elem-left'>
              <img src='assets/img/specsuper4.png' alt='img' />
              <p className='specs__p1'>стаж 8 месяцев</p>
            </div>
            <div className='specs-grid__elem-right'>
              <p className='specs__p2'>врач</p>
              <p className='specs__phard mb20'>
                Константинопольский Константин Константинович
              </p>
              <p className='specs__p2'>специализация</p>
              <p className='specs__phard'>Врач общей практики</p>
            </div>
          </HashLink>
        </div>
      </div>
    </section>
  );
};
