import {
  Box
} from "@chakra-ui/react";
import WhiteBoxHeader from "./WhiteBoxHeader";
import WhiteBoxFooter from "./WhiteBoxFooter";
import WhitBoxMidContent from "./WhitBoxMidContent";
import WhiteBoxAllModuleContent from "./WhiteBoxAllModuleContent";





function WhiteBox() {
  return (
    <Box w="65%" height="100%" bg="#FFFFFF" padding="2rem 0">
      <WhiteBoxHeader />
      <WhitBoxMidContent />
      <WhiteBoxAllModuleContent />
     <WhiteBoxFooter />
    </Box>
  );
}

export default WhiteBox;
