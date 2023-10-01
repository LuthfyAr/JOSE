import{Routes, Route} from 'react-router-dom';
import NavbarComponents from './components/NavbarComponents';

import FooterComponents from './components/FooterComponents';


// import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import DoctorPage from './pages/DoctorPage';
import TestimonialPage from './pages/TestimonialPage';
import FaqPage from './pages/FaqPage';
import SymptomsPage from './pages/SymptomsPage';
import FasilitasPage from './pages/FasilitasPage';
import LoginPage from './pages/LoginPage';
import DaftarPage from './pages/DaftarPage';


function App() {
  return <div>
    <NavbarComponents/>

    <Routes>
      <Route path='/' Component={ServicesPage} />
      <Route path='/services' Component={ServicesPage} />
      <Route path='/symtomschecker' Component={SymptomsPage} />
      <Route path='/fasilitas' Component={FasilitasPage} />
      <Route path='/doctor' Component={DoctorPage} />
      <Route path='/testimoni' Component={TestimonialPage} />
      <Route path='/login' Component={LoginPage}/>
      <Route path='/daftar' Component={DaftarPage}/>

    </Routes>

    <FooterComponents/>

  </div>;
}

export default App;
