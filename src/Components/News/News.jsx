import React from 'react';
import './News.css';

export const News = () => {
  return (
    <section className='news'>
      <div className='news-left'>
        <h2 className='news__h2'>Новости и акции</h2>
      </div>
      <div className='news-right'>
        <div
          className='news-num'
          style={{
            marginBottom: 58,
          }}
        >
          <button className='news-num__page text-color'>1</button>
          <button className='news-num__page'>2</button>
          <button className='news-num__page'>3</button>
          <button className='news-num__page'>4</button>
        </div>
        <div className='news-main'>
          <div className='news-main__elem'>
            <img src='assets/img/sales.png' alt='dog' />
            <div className='news-text'>
              <h3 className='news__h3'>Подарок</h3>
              <p className='news__small'>до 1 декабря 2020</p>
              <p className='news__p'>
                Данные клинического осмотра, указывающие на наличие наружного
                отита, включают такие признаки, как отек и эритема ушной
                раковины, выделения из ушей, болезненная реакция и/или
                беспокойство при пальпации наружного слухового хода и
                потряхивание головой после т ...
              </p>
            </div>
          </div>
          <div className='news-main__elem'>
            <img src='assets/img/sales.png' alt='dog' />
            <div className='news-text'>
              <h3 className='news__h3'>Подарок</h3>
              <p className='news__small'>до 1 декабря 2020</p>
              <p className='news__p'>
                Данные клинического осмотра, указывающие на наличие наружного
                отита, включают такие признаки, как отек и эритема ушной
                раковины, выделения из ушей, болезненная реакция и/или
                беспокойство при пальпации наружного слухового хода и
                потряхивание головой после т ...
              </p>
            </div>
          </div>
          <div className='news-main__elem'>
            <img
              src='assets/img/sales.png'
              alt='dog'
              className='news-img-timedup'
            />
            <div className='news-text'>
              <h3 className='news__h3 diff'>Подарок</h3>
              <p className='news__smalldiff'>Акция закончилась</p>
              <p className='news__p diff'>
                Данные клинического осмотра, указывающие на наличие наружного
                отита, включают такие признаки, как отек и эритема ушной
                раковины, выделения из ушей, болезненная реакция и/или
                беспокойство при пальпации наружного слухового хода и
                потряхивание головой после т ...
              </p>
            </div>
          </div>
          <div className='news-main__elem'>
            <img
              src='assets/img/sales.png'
              alt='dog'
              className='news-img-timedup'
            />
            <div className='news-text'>
              <h3 className='news__h3 diff'>Подарок</h3>
              <p className='news__smalldiff'>Акция закончилась</p>
              <p className='news__p diff'>
                Данные клинического осмотра, указывающие на наличие наружного
                отита, включают такие признаки, как отек и эритема ушной
                раковины, выделения из ушей, болезненная реакция и/или
                беспокойство при пальпации наружного слухового хода и
                потряхивание головой после т ...
              </p>
            </div>
          </div>
          <div className='news-main__elem'>
            <img
              src='assets/img/sales.png'
              alt='dog'
              className='news-img-timedup'
            />
            <div className='news-text'>
              <h3 className='news__h3 diff'>Подарок</h3>
              <p className='news__smalldiff'>Акция закончилась</p>
              <p className='news__p diff'>
                Данные клинического осмотра, указывающие на наличие наружного
                отита, включают такие признаки, как отек и эритема ушной
                раковины, выделения из ушей, болезненная реакция и/или
                беспокойство при пальпации наружного слухового хода и
                потряхивание головой после т ...
              </p>
            </div>
          </div>
        </div>
        <div
          className='news-num'
          style={{
            marginTop: 58,
          }}
        >
          <button className='news-num__page text-color'>1</button>
          <button className='news-num__page'>2</button>
          <button className='news-num__page'>3</button>
          <button className='news-num__page'>4</button>
        </div>
      </div>
    </section>
  );
};
