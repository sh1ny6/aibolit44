import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer.jsx';
import { Account } from './Components/Account/Account.jsx';
import { History } from './Components/History/History.jsx';
import { Home } from './Components/Home/Home.jsx';
import { Specialists } from './Components/Specialists/Specialists.jsx';
import { Specialist } from './Components/Specialists/Specialist/Specialist.jsx';
import { Blog } from './Components/Blog/Blog.jsx';
import { Header } from './Components/Header/Header.jsx';
import { Products } from './Components/Products/Products.jsx';
// import { SignUp } from './Components/SignUp/SignUp.jsx';
import { News } from './Components/News/News.jsx';
import transition from './transition.jsx';

import { AnimatePresence } from 'framer-motion';

const HomeWithTransition = transition(Home);
const HistoryWithTransition = transition(History);
const ProductsWithTransition = transition(Products);
const SpecialistsWithTransition = transition(Specialists);
const SpecialistWithTransition = transition(Specialist);
const BlogWithTransition = transition(Blog);
const NewsWithTransition = transition(News);

function App() {
  const location = useLocation();

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header></Header>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomeWithTransition />} />
          <Route path='/History' element={<HistoryWithTransition />} />
          <Route path='/Products' element={<ProductsWithTransition />} />
          <Route path='/Specialists' element={<SpecialistsWithTransition />} />
          <Route
            path='/Specialists/Specialist'
            element={<SpecialistWithTransition />}
          />
          <Route path='/Account' element={<Account />} />
          <Route path='/Blog' element={<BlogWithTransition />} />
          <Route path='/News' element={<NewsWithTransition />} />
          {/* <Route path='/SignUp' element={<SignUp></SignUp>} /> */}
        </Routes>
      </AnimatePresence>
      <Footer></Footer>
    </div>
  );
}

export default App;
