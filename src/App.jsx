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

// import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header></Header>
      {/* <AnimatePresence mode='wait'> */}
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home></Home>} />
        <Route path='/History' element={<History></History>} />
        <Route path='/Products' element={<Products></Products>} />
        <Route path='/Specialists' element={<Specialists></Specialists>} />
        <Route
          path='/Specialists/Specialist'
          element={<Specialist></Specialist>}
        />
        <Route path='/Account' element={<Account></Account>} />
        <Route path='/Blog' element={<Blog></Blog>} />
        <Route path='/News' element={<News></News>} />
        {/* <Route path='/SignUp' element={<SignUp></SignUp>} /> */}
      </Routes>
      {/* </AnimatePresence> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
