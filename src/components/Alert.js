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

  return (
    <Box position="fixed" top="4" left="0" width="100%" zIndex="toast">
      <Alert status={type} variant="subtle" borderRadius="md" mx="auto" maxW="md">
        <AlertIcon />
        <AlertTitle>{type === "success" ? "Success!" : "Error"}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
      </Alert>
    </Box>
  );
};

export default GlobalAlert;
