import React from 'react';
import {
    Box,
    Text
} from '@chakra-ui/react';

function Footer() {
    const today = new Date();

    return (
        <Box className='footer'>
            <Text>DESIGNED BY RYAN FERNANDEZ | AFSHIN MOSTOFI | EDUARDO GOTO | LINH KLATT {today.getFullYear()}</Text>
        </Box>
    )
}

export default Footer;