import React from "react";
import { VStack, Box } from "@chakra-ui/react";

const FullScreenSection = ({
  children,
  isDarkBackground = false,
  backgroundColor,
  spacing = 0,
  py,
  px,
  alignItems = "center",
  justifyContent = "center",
  ...rest
}) => (
  <VStack
    width="100%"
    minHeight="100vh"
    backgroundColor={backgroundColor}
    color={isDarkBackground ? "white" : "black"}
    spacing={spacing}
    py={py}
    px={px}
    alignItems={alignItems}
    justifyContent={justifyContent}
    {...rest}
  >
    <Box maxW="1280px" width="100%">
      {children}
    </Box>
  </VStack>
);

export default FullScreenSection;