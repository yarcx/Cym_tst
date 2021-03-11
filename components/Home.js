import React from 'react'
import { Box} from "@chakra-ui/react";
import BlackBox from './LeftBox/BlackBox';
import WhiteBox from './RightBox/WhiteBox';

function Home() {
    return (
      <Box w="100%" h="auto" d="flex" overflow="hidden">
        <BlackBox />
        <WhiteBox />
      </Box>
    );
}

export default Home
