import React from 'react';

import TourItems from '../Tour/TourItmes'
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