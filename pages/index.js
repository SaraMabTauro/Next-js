
import React from 'react';
import Navbar from '../src/components/NavBar';
import Cumbre from '@/src/components/Cumbre';
import NewsSection from '@/src/components/Section';
import VideoComponent from '@/src/components/VideoComp';
import WorkSection from '@/src/components/Trabajo';
import EsliganSection from '@/src/components/Eslogan';
import Seccion from '@/src/components/Seccion';
import Footer from '@/src/components/Footer';
import RegionList from '@/src/components/RegionList';

const TuPagina = () => {
  return (
    <div>
      <Navbar/>
      <Cumbre/>
      <NewsSection/>
      <VideoComponent/>
      <WorkSection/>
      <EsliganSection/>
      <Seccion/>
      <Footer/>
      <RegionList/>
    </div>
  );
};

export default TuPagina;
