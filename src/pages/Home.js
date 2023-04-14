import React from 'react';
import {
    Box,
    Text
} from '@chakra-ui/react';

import Map from '../components/Map';

function Home() {
    return (
        <Box id='home' className='home'>
            <Map />
        </Box>
    );
}

export default Home;