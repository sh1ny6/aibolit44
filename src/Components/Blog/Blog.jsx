import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Blog.css';

function GetDogArticle() {
  return (
    <div className='blog-main__elem'>
      <img src='assets/img/blogimg.png' alt='dog' />
      <div className='blog-text'>
        <h3 className='blog__h3'>Наружный отит и грибы Malassezia</h3>
        <p className='blog__small'>29 мая 2018</p>
        <p className='blog__p'>
          Данные клинического осмотра, указывающие на наличие наружного отита,
          включают такие признаки, как отек и эритема ушной раковины, выделения
          из ушей, болезненная реакция и/или беспокойство при пальпации
          наружного слухового хода и потряхивание головой после т ...
        </p>
      </div>
    </div>
  );
}

export const Blog = () => {
  return (
    <section className='blog'>
      <div className='blog-left'>
        <h2 className='blog__h2'>Терапия</h2>
        <div className='blog-nav'>
          <HashLink to='/History#nav'>
            <p className='blog-nav__elem'>О НАС</p>
          </HashLink>
          <HashLink to='/Specialists#nav'>
            <p className='blog-nav__elem'>СПЕЦИАЛИСТЫ</p>
          </HashLink>
        </div>
      </div>
      <div className='blog-right'>
        <div
          className='blog-num'
          style={{
            marginBottom: 58,
          }}
        >
          <button className='blog-num__page text-color'>1</button>
          <button className='blog-num__page'>2</button>
          <button className='blog-num__page'>3</button>
          <button className='blog-num__page'>4</button>
        </div>
        <div className='blog-main'>
          <GetDogArticle />
          <GetDogArticle />
          <GetDogArticle />
          <GetDogArticle />
          <GetDogArticle />
        </div>
        <div
          className='blog-num'
          style={{
            marginTop: 58,
          }}
        >
          <button className='blog-num__page text-color'>1</button>
          <button className='blog-num__page'>2</button>
          <button className='blog-num__page'>3</button>
          <button className='blog-num__page'>4</button>
        </div>
      </div>
    </section>
  );
};
