import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box,
} from "@chakra-ui/react";

import { useAlertContext } from "../context/alertContext";

const GlobalAlert = () => {
  const { isOpen, type, message, onClose } = useAlertContext();
  if (!isOpen) return null;

  const alertStatus = type || "info";

  return (
    <Box position="fixed" top="4" left="0" width="100%" zIndex="toast">
      <Alert status={alertStatus} 
             variant="subtle" 
             borderRadius="md" 
             mx="auto" 
             maxW="md"
             boxShadow="xl"
      >
        <AlertIcon />
        <AlertTitle>{alertStatus === "success" ? "Success!" : "Error"}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
        <CloseButton 
          position="absolute" 
          right="4px" 
          top="13px" 
          onClick={onClose}
          size="sm" 
          fontSize="9px"
          opacity={0.8}
          />
          
      </Alert>
    </Box>
  );
};

export default GlobalAlert;
