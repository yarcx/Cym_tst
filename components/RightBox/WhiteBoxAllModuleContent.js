import {
  Box,
  Grid,
} from "@chakra-ui/react";
import AllModulesCard from "./AllModules/AllModulesCard";
import { AllModulesContents } from "./AllModules/AllModuleContent";

function WhiteBoxAllModuleContent() {
    return (
      <Box
        borderTop="2px solid #EEEEEE"
        borderBottom="2px dashed #EEEEEE"
        position="relative"
        className="w-10/12"
        mt="1rem"
        mx="auto"
        height="auto"
        pb="1rem"
      >
        <Box
          as="h2"
          position="absolute"
          left="4"
          top="-4"
          width="15%"
          textAlign="center"
          background="white"
        >
          All Modules
        </Box>

        <Grid
          templateColumns="repeat(3, 3fr)"
          columnGap={10}
          rowGap={5}
          mt="20px"
        >
          {/* All Modules Card */}
          {AllModulesContents.map((moduleContent, i) => {
            const { text, icon, exclamation } = moduleContent;
            return (
              <AllModulesCard
                index={i}
                icon={icon}
                text={text}
                key={i}
                exclamation={exclamation}
              />
            );
          })}

          {/* end of card component */}
        </Grid>
      </Box>
    );
}

export default WhiteBoxAllModuleContent
