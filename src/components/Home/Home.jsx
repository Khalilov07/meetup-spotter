import React from 'react';

import TourItems from '../Tour/TourItems'
import MainBanner from './MainBanner';

const Home = () => {
    return (
        <main className='main'>
            <MainBanner />
            <TourItems />
        </main>
    );
};

export default Home;