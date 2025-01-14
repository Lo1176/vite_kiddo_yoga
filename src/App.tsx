import { FC } from 'react';
import { About } from './components/About';
import { Banner } from './components/Banner';
import { Description } from './components/Description';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Tarifs } from './components/Tarifs';
import './scss/app.scss';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className='container'>
        <Description />
        <About />
        <Tarifs />
      </div>
      <Footer />
    </>
  );
};

export default App;
