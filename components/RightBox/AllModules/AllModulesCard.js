import React from 'react'
import { Box, Icon } from "@chakra-ui/react";

function AllModulesCard({ icon, text, exclamation , index}) {
  return (
    <Box
      borderRadius="5px"
      d="flex"
      padding="0.3rem"
      justifyContent="space-between"
      w={exclamation ? "80%" : "70%"}
      h="2.7rem"
      cursor="pointer"
      bg={exclamation ? "#FFFAE6" : "transparent"}
    >
      <Box w="20%" display="flex" justifyContent="center" alignItems="center">
        <Icon
          as={icon}
          color={index === 0 ? "black" : "#D3D3D3"}
          fontSize="1.5rem"
        />
      </Box>
      <Box w="55%" display="flex" justifyContent="center" alignItems="center">
        <Box
          as="p"
          fontWeight="semibold"
          fontSize="sm"
          color={index === 0 ? "black" : "#D3D3D3"}
          textAlign="left"
        >
          {text}
        </Box>
      </Box>
      <Box w="20%" display="flex" justifyContent="center" alignItems="center">
        {exclamation ? (
          <Icon as={exclamation} color="#F1C71B" size="2rem" />
        ) : null}
      </Box>
    </Box>
  );
}

export default AllModulesCard
