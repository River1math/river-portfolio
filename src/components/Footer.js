import React from "react";
import { Box, Flex, Link, Text, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box backgroundColor="#18181b" color="white">
      <Flex
        as="footer"
        maxW="1024px"
        mx="auto"
        px={6}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>River • © {year}</Text>
        <Flex gap={4}>
          <Link href="https://github.com/River1math" aria-label="GitHub" isExternal>
            <Icon as={FaGithub} boxSize={5} />
          </Link>
          <Link href="https://www.linkedin.com/in/river-lee-156403179/" aria-label="LinkedIn" isExternal>
            <Icon as={FaLinkedin} boxSize={5} />
          </Link>
          <Link href="https://twitter.com/username" aria-label="Twitter" isExternal>
            <Icon as={FaTwitter} boxSize={5} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;