import React from 'react';
import {
    Box,
    Text
} from '@chakra-ui/react';

import Map from '../components/Map';
import PlaceDetails from '../components/PlaceDetails';

function Home() {
    return (
        <Box id='home' className='home'>
            <Map />
            <PlaceDetails />
        </Box>
    );
}

export default Home;