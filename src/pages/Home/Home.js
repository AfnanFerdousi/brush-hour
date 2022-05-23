import React from 'react';
import Footer from '../shared/Footer';
import AllTool from './AllTool';
import Banner from './Banner';
import BusinessSum from './BusinessSum';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <AllTool className='container mx-auto'></AllTool> 
            <BusinessSum className='container mx-auto flex justify-center'></BusinessSum>         
            <Reviews className='container mx-auto'></Reviews>
            <Footer></Footer>         
        </div>
    );
};

export default Home;