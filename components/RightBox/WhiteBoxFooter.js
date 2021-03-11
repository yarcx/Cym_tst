import {
  Button,
  Stack,
} from "@chakra-ui/react";

function WhiteBoxFooter() {
    return (
      <Stack
        mt="1rem"
        className="w-10/12 mx-auto"
        direction="row"
        justifyContent="space-between"
        align="center"
      >
        <Button
          colorScheme="red"
          opacity="0.5"
          variant="ghost"
          fontWeight="bold"
        >
          Go Back
        </Button>
        <Button
          color="Black"
          _hover={{ opacity: "0.5" }}
          fontWeight="bold"
          backgroundColor="#F1C71B"
          variant="solid"
        >
          Continue
        </Button>
      </Stack>
    );
}

export default WhiteBoxFooter
