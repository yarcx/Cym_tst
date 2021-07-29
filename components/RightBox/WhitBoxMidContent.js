import {
  Box,
  Button,
  Grid,
  Stack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";
import {useState} from "react"
import { RiSlideshow4Line } from "react-icons/ri";


const includesList = [
  { text: "- 25 Users" },
  { text: "- All Modules & Features" },
  { text: "- Unlimited Commitees" },
  { text: "- Unimited roles creation" },
];


function WhitBoxMidContent() {
  const [select, setSelect] = useState("right")

  const handleSelect = (sides) => {
    setSelect(sides)
  }

    return (
      <Box h="auto" mt="0.9rem" className="flex flex-col w-10/12 mx-auto">
        <Box h="auto" className="flex items-start justify-between w-full">
          <Box
            onClick={() => handleSelect("left")}
            border={select === "left" ? "1px solid #94E1B2" : ""}
            boxShadow=" -11px 11px 22px -34px rgba(52,143,184,0.77)"
            borderRadius="1rem"
            h="auto"
            w="48%"
            backgroundColor={select === "left" ? "#F6F9FF" : ""}
            padding=" 2.5rem"
            display="flex"
            justifyContent="flex-end"
            flexDir="column"
            position="relative"
          >
            {select === "left" && (
              <Box
                position="absolute"
                display="flex"
                justifyContent="center"
                alignItems="center"
                right="-5"
                top="-15px"
                h="2.5rem"
                w="2.5rem"
                background="#94E1B2"
                borderRadius="50%"
              >
                <FiCheck color="white" size="30px" />
              </Box>
            )}
            <Box>
              <Box as="p" color="#F1C71B" fontWeight="bold">
                Starts from
              </Box>
              <Box as="p" fontSize="small" color="#B6B6B6" fontWeight="bold">
                NGN
              </Box>
              <Box as="h3" color="#191919">
                <strong> 5,999,999.99</strong>
              </Box>
              <Box as="span" color="#ABABAB">
                per annum
              </Box>
            </Box>
            <Box>
              <Box as="h3" color="#191919">
                <strong>Premium</strong>
              </Box>
              <Box
                d="flex"
                justifyContent="space-between"
                w={["100%", "", "100%", "70%", "60%"]}
                alignItems="center"
              >
                {" "}
                <Box
                  as="p"
                  color="#ABABAB"
                  fontWeight="semibold"
                  fontSize="medium"
                >
                  100 Users
                </Box>
                <Box
                  h="5px"
                  w="5px"
                  borderRadius="50%"
                  background="#F1C71B"
                ></Box>
                <Box
                  as="p"
                  color="#ABABAB"
                  fontWeight="semibold"
                  fontSize="medium"
                >
                  All Modules
                </Box>
              </Box>
            </Box>
          </Box>
          {/* WhiteBox left centered content goes here */}
          <Box
            onClick={() => handleSelect("right")}
            border={select === "right" ? "1px solid #94E1B2" : ""}
            borderRadius="0.5rem"
            position="relative"
            h="auto"
            w="48%"
            backgroundColor={select === "right" ? "#F6F9FF" : ""}
            padding="0.8rem"
            boxSizing="border-box"
          >
            {select === "right" && (
              <Box
                position="absolute"
                display="flex"
                justifyContent="center"
                alignItems="center"
                right="-5"
                top="-15px"
                h="2.5rem"
                w="2.5rem"
                background="#94E1B2"
                borderRadius="50%"
              >
                <FiCheck color="white" size="30px" />
              </Box>
            )}
            <Box padding="0 2rem">
              <Box as="h2" fontSize="medium" fontWeight="bold" color="#477AEF">
                Basic
              </Box>

              <Box as="p" width="80%" color="#B4B6BD" fontSize="md">
                <Box
                  as="strong"
                  color="#ABABAB"
                  fontWeight="semibold"
                  fontSize="medium"
                >
                  30 days trial
                </Box>
                <Box as="span"> on our premium app features</Box>
              </Box>
              <Box>
                <Box as="div" display="flex" alignItems="center">
                  <Box
                    as="h6"
                    color="#ABABAB"
                    fontWeight="semibold"
                    fontSize="medium"
                    color="#ABABAB"
                    mr="3.5"
                  >
                    Includes
                  </Box>{" "}
                  <Box as="span" width="60%" color=" #D1E3F8">
                    -------------------
                  </Box>
                </Box>

                <ul>
                  {includesList.map((list, i) => {
                    return (
                      <Box color="#B4B6BD" fontSize="md" as="p" key={i}>
                        {list.text}
                      </Box>
                    );
                  })}
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          h="30%"
          className="flex flex-col justify-around w-full mx-auto mt-3"
        >
          <>
            <Box as="h1" fontSize="lg" color="#7C7C84" fontWeight="semibold">
              Add More Users
            </Box>
            <Box as="p">
              <Box as="strong">NGN99,999</Box>{" "}
              <Box as="span" color="#B4B6BD" fontSize="md">
                per User
              </Box>
            </Box>
          </>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box as="strong">0</Box>
            <Box as="strong">{">"}1000</Box>
          </Box>
          <Slider aria-label="slider-ex-2" defaultValue={30}>
            <SliderTrack height="6px" bg="#EAEFFA">
              <SliderFilledTrack bg="#6C92E2" />
            </SliderTrack>
            <SliderThumb boxSize={5} bg="#6C92E2">
              <Box bg="white" h="30%" w="30%" borderRadius="50%"></Box>
            </SliderThumb>
          </Slider>
        </Box>
      </Box>
    );
}

export default WhitBoxMidContent
