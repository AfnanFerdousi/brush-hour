import React from 'react';
import Footer from '../shared/Footer';
import AllTool from './AllTool';
import Banner from './Banner';
import BusinessSum from './BusinessSum';
import Chart from './Chart';
import FoundersWords from './FoundersWords';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <AllTool className='container mx-auto'></AllTool> 
            <BusinessSum className='container mx-auto flex justify-center'></BusinessSum> 
            <FoundersWords></FoundersWords> 
            <Chart className=" "></Chart>       
            <Reviews className='container mx-auto'></Reviews>
            <Footer></Footer>         
        </div>
    );
};

export default Home;