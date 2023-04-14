import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Link
} from '@chakra-ui/react';

import { Icon } from 'semantic-ui-react';


function Header() {
    return (
        <Flex className='header'>
            <Flex className='headerText' direction='column'>
                <Heading>HIDDEN GEMS</Heading>
                <Text>Discover San Diego</Text>
            </Flex>
            <Box className='headerContinue'>
                <Link href='#home'>
                    <Icon name='angle down' size='big'/>
                </Link>
            </Box>
        </Flex>
    );
}

export default Header;