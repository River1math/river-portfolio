import React from "react";
//import portrait from "../images/river.png";
import {
  Avatar,
  Heading,
  VStack,
  Text,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaCode } from "react-icons/fa";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Peter!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React";

const LandingSection = () => {
  // Animation keyframes
  const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  `;

  const iconFloat = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
  `;

  const MotionBox = motion(Box);
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="linear-gradient(135deg, #1a365d 0%, #2a4365 50%, #1a365d 100%)"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        width="100%"
        maxWidth="1200px"
        px={8}
        gap={{ base: 8, md: 16 }}
      >
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Avatar
            src="/river.png"
            size="2xl"
            boxSize="220px"
            borderWidth="4px"
            borderColor="teal.400"
            boxShadow="0 0 25px rgba(0,188,212,0.5)"
            aria-label="Avatar"
          />
        </MotionBox>

        <VStack
          spacing={6}
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          maxWidth="600px"
        >
          <MotionHeading
            as="h1"
            size="xl"
            animation={`${fadeIn} 1s ease-out`}
            opacity="0"
          >
            {greeting}
          </MotionHeading>

          <MotionHeading
            as="h2"
            size="lg"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            fontWeight="extrabold"
            animation={`${fadeIn} 1s ease-out 0.3s forwards`}
            opacity="0"
          >
            {bio1}
          </MotionHeading>

          <MotionHeading
            as="h3"
            size="md"
            bgGradient="linear(to-r, teal.300, green.400)"
            bgClip="text"
            fontWeight="bold"
            animation={`${fadeIn} 1s ease-out 0.6s forwards`}
            opacity="0"
          >
            {bio2}
          </MotionHeading>

          <MotionText
            fontSize="lg"
            mt={4}
            color="blue.200"
            animation={`${fadeIn} 1s ease-out 0.9s forwards`}
            opacity="0"
          >
            Passionate about creating beautiful, responsive, and user-friendly web applications with modern technologies.
          </MotionText>

          <Flex mt={6} gap={6} wrap="wrap">
            {[
              { icon: FaReact, label: 'React', delay: 1.2 },
              { icon: FaNodeJs, label: 'Node.js', delay: 1.5 },
              { icon: FaJs, label: 'JavaScript', delay: 1.8 },
              { icon: FaCode, label: 'Coding', delay: 2.1 }
            ].map((item, idx) => (
              <MotionBox
                key={idx}
                animation={`${iconFloat} 3s ease-in-out infinite, ${fadeIn} 1s ease-out ${item.delay}s forwards`}
                opacity="0"
              >
                <Icon as={item.icon} boxSize={12} aria-label={item.label} />
              </MotionBox>
            ))}
          </Flex>
        </VStack>
      </Flex>
    </FullScreenSection>
  );
};

export default LandingSection;
