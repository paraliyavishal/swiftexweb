import React from 'react';
import Header from '../commoncomponent/header/Header';
import Navbar from '../commoncomponent/header/Navbar';
import Herosection from '../components/home/Herosection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServiceProcess from '../components/home/ServiceProcess';
import ProvideLogistics from '../components/home/ProvideLogistics';
import HomeProducts from '../components/home/HomeProducts';
import LatestBlogs from '../components/home/LatestBlogs';
import Footer from '../commoncomponent/footer/Footer';

function Home() {
  return (
    <div>
     <Header />
     <Navbar/>
     <Herosection/>
     <ProvideLogistics/>
     <WhyChooseUs />
     <HomeProducts />
     <ServiceProcess />  {/* Responsive baki */}
     <LatestBlogs />
     <Footer />
    </div>
  );
}

export default Home;
