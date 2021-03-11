import { Box, Icon } from "@chakra-ui/react";

function WhiteBoxHeader() {
    return (
      <Box as="div" className="flex w-10/12 h-auto mx-auto ">
        <Box as="div" className="w-9/12 h-inherit">
          <Box as="p" fontSize="0.9rem" fontWeight="bold" color="#B6B6B6">
            Hey Terry
          </Box>
          <Box as="h1" fontWeight="bold" color="black" fontSize="1.6rem">
            Start your{" "}
            <Box as="span" color="#F1C71B" fontStyle="italic">
              30 days
            </Box>{" "}
            Trial
          </Box>
          <Box as="p" fontSize="md" color="#B6B6B6">
            select your prefered package below
          </Box>
        </Box>
        <Box as="div" className="w-3/12 h-inherit">
          <Box as="p" color="#B3C1E8" fontWeight="bold">
            NGN
          </Box>
          <Box as="p" color="#477AEF" fontSize="1.5rem" fontWeight="bold">
            1,999,999
          </Box>
          <Box as="p" color="#7E7E7E">
            <strong>Total</strong>(EXCLUDES VAT)
          </Box>
        </Box>
      </Box>
    );
}

export default WhiteBoxHeader
