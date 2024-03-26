import React from 'react';
import './Products.css';
import { HashLink } from 'react-router-hash-link';

export const Products = () => {
  return (
    <div className='products-main'>
      <div className='products'>
        <div className='products-left'>
          <h2 className='products__h2'>Терапия</h2>
          <div className='products-nav'>
            <a href='#products__sign'>
              <p className='products-nav__elem'>ЗАПИСАТЬСЯ НА ПРИЕМ</p>
            </a>
            <a href='#products__therapy'>
              <p className='products-nav__elem'>ТЕРАПИЯ В НАШЕЙ КЛИНИКЕ</p>
            </a>
            <a href='#products__1'>
              <p className='products-nav__elem'>ПОДЗАГОЛОВОК 1</p>
            </a>
            <a href='#products__2'>
              <p className='products-nav__elem'>ПОДЗАГОЛОВОК 2</p>
            </a>
            <a href='#products__cost'>
              <p className='products-nav__elem'>ЦЕНЫ</p>
            </a>
          </div>
        </div>
        <div className='products-right'>
          <HashLink to='/#nav' className='products-back'>
            <img
              src='assets/img/arrowback.svg'
              alt='arrow'
              style={{ marginRight: 5 }}
            />
            <p className='products-back__p'>НАЗАД</p>
          </HashLink>
          <div id='products__sign' className='products__sign'>
            <h3 className='products__h3 mb30 mt60'>
              Записаться на прием к терапевту
            </h3>
            <div className='products-slider'>
              <div className='products-slider-items'>
                <button className='products-slider-items__item'>
                  <div className='item-left'></div>
                  <div className='item-right'>
                    <h5 className='item-right__h5'>
                      Ивантелеев
                      <br /> Иван Костантинович
                    </h5>
                    <p className='item-right__p'>
                      ближайшая дата приема: 29.08.19
                    </p>
                  </div>
                </button>
                <button className='products-slider-items__item'>
                  <div className='item-left'></div>
                  <div className='item-right'>
                    <h5 className='item-right__h5'>
                      Ивантелеев
                      <br /> Иван Костантинович
                    </h5>
                    <p className='item-right__p'>
                      ближайшая дата приема: 29.08.19
                    </p>
                  </div>
                </button>
                {/* <button className='products-slider-items__item'>
                <div className='item-left'></div>
                <div className='item-right'>
                  <h5 className='item-right__h5'>
                    Ивантелеев
                    <br /> Иван Костантинович
                  </h5>
                  <p className='item-right__p'>
                    ближайшая дата приема: 29.08.19
                  </p>
                </div>
              </button>
              <button className='products-slider-items__item'>
                <div className='item-left'></div>
                <div className='item-right'>
                  <h5 className='item-right__h5'>
                    Ивантелеев
                    <br /> Иван Костантинович
                  </h5>
                  <p className='item-right__p'>
                    ближайшая дата приема: 29.08.19
                  </p>
                </div>
              </button>
              <button className='products-slider-items__item'>
                <div className='item-left'></div>
                <div className='item-right'>
                  <h5 className='item-right__h5'>
                    Ивантелеев
                    <br /> Иван Костантинович
                  </h5>
                  <p className='item-right__p'>
                    ближайшая дата приема: 29.08.19
                  </p>
                </div>
              </button>
              <button className='products-slider-items__item'>
                <div className='item-left'></div>
                <div className='item-right'>
                  <h5 className='item-right__h5'>
                    Ивантелеев
                    <br /> Иван Костантинович
                  </h5>
                  <p className='item-right__p'>
                    ближайшая дата приема: 29.08.19
                  </p>
                </div>
              </button> */}
              </div>
            </div>
          </div>
          <div>
            <h3 className='products__h3' id='products__therapy'>
              Терапия в нашей клинике
            </h3>
            <p className='products__p mt50'>
              Терапия - область гуманной и ветеринарной медицины, занимающаяся
              непосредственно лечением патологий, облегчением состояния больного
              и устранением симптомов заболеваний.
            </p>
            <p className='products__p mt50 mb100'>
              Терапевтическое отделение клиники Айболит занимается диагностикой
              и лечением следующих болезней:
              <br /> - органов пищеварения;
              <br /> - органов сердечно-сосудистой системы;
              <br /> - органов дыхательной системы;
              <br /> - нервной системы;
              <br /> - органов мочевыделительной системы;
              <br /> - эндокринной системы; - нарушения обмена веществ;
              <br /> - кожи и ее производных;
              <br /> - органов чувств;
              <br /> - репродуктивной области;
              <br /> - инфекционной и инвазионной природы;
              <br /> - токсикологической природы.
            </p>
          </div>
          <div>
            <h3 className='products__h3 ' id='products__1'>
              Подзаголовок 1
            </h3>
            <p className='products__p mt50 mb50'>
              В нашей клинике имеются как врачи-терапевты общей практики, так и
              узкие специалисты по ряду перечисленных областей, что дает
              возможность излечивать тяжелые и редкие случаи патологий.
            </p>
            <img src='assets/img/productspic.png' className='products-pics' />
            <p className='products__p mt50'>
              Врач-терапевт подходит к лечению животного комплексно,
              предварительно изучив его анамнез, учитывая возраст, пол, породу,
              наличие хронических болезней, условия содержания, типа кормления,
              оценив общее состояние питомца, полностью осмотрев его и назначив
              необходимую диагностику и соответствующее лечение.{' '}
            </p>{' '}
            <p className='products__p mt50'>
              Врачи клиники имеют широкий спектр диагностических возможностей,
              что является идеальным условием для постановки точного диагноза, а
              значит и назначения того лечения, которое наиболее эффективно
              справится с данным конкретным клиническим случаем.
            </p>{' '}
            <p className='products__p mt50'>
              Некоторую диагностику можно провести тут же на месте в течение
              буквально нескольких минут, что немаловажно для экстренных случаев
              и значительно экономят время владельцам:
              <br />- гематологический и биохимический анализы крови;
              <br /> - исследование Т4 и кортизол;
              <br /> - анализ газов крови;
              <br /> - рентген;
              <br /> - ультразвуковое исследование брюшной полости и сердца;
              <br /> - микроскопия мазков и соскобов;
              <br /> - люминесцентный тест на лишай;
              <br /> - экспресс-анализы на основные вирусные заболевания.
            </p>
          </div>
          <div>
            <h3 className='products__h3 mt70' id='products__2'>
              Подзаголовок 2
            </h3>
            <p className='products__p mt50'>
              Большинство исследований, требующих седации (эндоскопия, МРТ,
              лапароскопия), так же доступны в течение суток. Более сложные
              анализы, такие как бактериологический посев, гормоны,
              гистологическое исследование мы направляем в дистанционную
              лабораторию.
            </p>
            <p className='products__p mt50'>
              Получив результаты исследований врач приступает к анализу причин и
              механизмов развития болезни и назначает лечение. Оно может быть
              медикаментозным (домашним или стационарным) или оперативным
              (экстренным или плановым).
            </p>
            <p className='products__p mt50'>
              Эффективность терапии в большой степени зависит и от владельца
              животного, ведь именно ему необходимо будет соблюдать предписания
              врача, вовремя давать препараты или ставить уколы, следить за
              развитием динамики и симптомов, чтобы вовремя оповестить врача о
              происходящих изменениях, для своевременной коррекции лечения.
            </p>
            <p className='products__p mt50 mb100'>
              Кроме лечения терапевты занимаются и профилактикой заболеваний.
              Доктора с удовольствием расскажут вам основы выращивания,
              содержания и кормления питомца, графики дегельминтизаций и
              прививок. Оформят ветеринарный паспорт и чипируют ваше животное.
            </p>
          </div>
          <div>
            <h3 className='products__h3' id='products__cost'>
              Цены
            </h3>
            <div className='products-cost-block mt50'>
              <p className='products__p'>
                Цены указаны без учета расходоных материалов
              </p>
              <div className='cost-num'>
                <button className='cost-num__page'>1</button>
                <button className='cost-num__page'>2</button>
                <button className='cost-num__page'>3</button>
                <button className='cost-num__page'>4</button>
              </div>
            </div>
            <div className='cost-main'>
              <div className='cost-main-page__1'>
                <div className='cost-primary cost-secondary'>
                  <p className='cost__p'>Прием</p>
                  <p className='cost__p'>320 ₽</p>
                </div>
                <div className='cost-primary'>
                  <p className='cost__p'>Прием повторный</p>
                  <p className='cost__p'>220 ₽</p>
                </div>
                <div className='cost-primary cost-secondary'>
                  <p className='cost__p'>Консультация без осмотра животного</p>
                  <p className='cost__p'>350 ₽</p>
                </div>
                <div className='cost-primary'>
                  <p className='cost__p'>Вызов врача на дом</p>
                  <p className='cost__p'>1000 ₽</p>
                </div>
                <div className='cost-primary cost-secondary'>
                  <p className='cost__p'>Полная выписка из истории болезни</p>
                  <p className='cost__p'>500 ₽</p>
                </div>
                <div className='cost-primary'>
                  <p className='cost__p'>
                    Консультация по медицинским документам
                  </p>
                  <p className='cost__p'>500 ₽</p>
                </div>
                <div className='cost-primary cost-secondary'>
                  <p className='cost__p'>Прием</p>
                  <p className='cost__p'>320 ₽</p>
                </div>
                <div className='cost-primary'>
                  <p className='cost__p'>Прием повторный</p>
                  <p className='cost__p'>220 ₽</p>
                </div>
                <div className='cost-primary cost-secondary'>
                  <p className='cost__p'>Консультация без осмотра животного</p>
                  <p className='cost__p'>350 ₽</p>
                </div>
                <div className='cost-primary'>
                  <p className='cost__p'>Вызов врача на дом</p>
                  <p className='cost__p'>1000 ₽</p>
                </div>
                <div className='cost-primary cost-secondary'>
                  <p className='cost__p'>Полная выписка из истории болезни</p>
                  <p className='cost__p'>500 ₽</p>
                </div>
                <div className='cost-primary'>
                  <p className='cost__p'>
                    Консультация по медицинским документам
                  </p>
                  <p className='cost__p'>500 ₽</p>
                </div>
              </div>
            </div>
            <div className='cost-num2'>
              <button className='cost-num__page'>1</button>
              <button className='cost-num__page'>2</button>
              <button className='cost-num__page'>3</button>
              <button className='cost-num__page'>4</button>
            </div>
          </div>
        </div>
      </div>
      <section className='uslugi-slider'>
        <h3 className='products__h3'>Все услуги</h3>
        <div className='uslugi-slider-main'>
          <a href='#' className='uslugi-item'>
            <div>
              <h4 className='uslugi-item__h4'>Терапия</h4>
              <div className='uslugi-item-right'>
                <p className='uslugi-item__p'>26 услуг</p>
                <div className='uslugi-item__ico uslugi-item__ico1'></div>
              </div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Хирургия</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico2'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Неврология</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico3'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Ортопедия</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico4'></div>
            </div>
          </a>
          {/*<a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Дерматология</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico5'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Офтальмология</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico6'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Кардиология</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico7'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Стоматология</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico8'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Репродуктология</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico9'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Визуальная диагностика</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico10'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Лаборатория</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico11'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Онкология</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico12'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Эндокринология</h4>
            <div className='uslugi-item-right'>
              <div className='uslugi-item__p'>26 услуг</div>
              <div className='uslugi-item__ico uslugi-item__ico13'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Экзотические животные</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico14'></div>
            </div>
          </a>
          <a href='#' className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Аптека</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico15'></div>
            </div>
          </a>
          <a className='uslugi-item'>
            <h4 className='uslugi-item__h4'>Груминг</h4>
            <div className='uslugi-item-right'>
              <p className='uslugi-item__p'>26 услуг</p>
              <div className='uslugi-item__ico uslugi-item__ico16'></div>
            </div>
          </a> */}
        </div>

        <HashLink to='/Products#nav' className='products__ontop'>
          наверх
        </HashLink>
      </section>
    </div>
  );
};
