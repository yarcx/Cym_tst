import React from 'react'
import { Box, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaQuoteLeft } from "react-icons/fa";




const list = [
  { text: "Trial & Pricing", arrow: ArrowForwardIcon },
  { text: "Payment Method", arrow: ArrowForwardIcon },
  { text: "--------", arrow: ArrowForwardIcon },
  { text: "Get Started...", arrow: ArrowForwardIcon },
];


function BlackBox() {
    return (
      <Box w="35%" minH="100vh" height="auto" bg="#222021" padding="2rem 0">
        <Box as="div" className="pl-20 ">
          <Box as="h1" color="#FFFFFF" fontSize="3xl">
            CYH
            <Box as="span" color="#FFCA00">
              ER
            </Box>
            MES
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          flexDir="column"
          h="full"
        >
          <Box as="div" className="w-full">
            {list.map((lis, i) => {
              return (
                <Box
                  as="li"
                  key={i}
                  cursor="pointer"
                  borderLeft={i === 0 && "3px solid  #FFCA00"}
                  className={`pl-20 list-none text-white`}
                  py={i === 2 ? "0.1rem" : "1rem"}
                >
                  <Box
                    w="80%"
                    d="flex"
                    fontSize="large"
                    fontWeight="semibold"
                    color={i === 0 ? "white" : i === 2 ? "#FFCA00" : "#B1AFB0"}
                    opacity={i === 2 && "0.5"}
                    justifyContent="space-between"
                  >
                    {" "}
                    <Box>{lis.text}</Box>{" "}
                    {i === 0 && <Icon as={lis.arrow} color="#B1AFB0" />}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box
            w="65%"
            h="9rem"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            border="1px solid #B1AFB0"
            mx="auto"
            borderRadius="7px"
          >
            <Box
              w="27%"
              backgroundColor="#222021"
              ml="-5rem"
              height="6rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <FaQuoteLeft size="4rem" color="#B1AFB0" />
            </Box>
            <Box w="70%" padding="1.5" ml="-3rem">
              <Box as="div" color="#716F70">
                Success is not final; failure is not fatal: it is the courage to
                continew that counts
                <Box
                  as="p"
                  color="#ccccce"
                  fontWeight="semibold"
                  fontSize="small"
                >
                  -Winston Churchil
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default BlackBox
