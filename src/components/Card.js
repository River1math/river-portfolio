import React from 'react';
import { Box, VStack, HStack, Image, Badge, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const MotionBox = motion(Box);

export default function Card({
  imageSrc,
  title,
  description,
  demoHref,
  codeHref,
  badgeText
}) {
  return (
    <MotionBox
      p={4}
      bg="rgba(255,255,255,0.9)"
      backdropFilter="blur(4px)"
      borderRadius="2xl"
      boxShadow="0 10px 30px rgba(0,0,0,0.1)"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 15px 45px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.3 }}
    >
      <VStack spacing={4} align="start">
        <Box position="relative" w="100%">
          <Image
            src={imageSrc}
            alt={`${title} screenshot`}
            borderRadius="lg"
            w="100%"
            objectFit="cover"
          />
          {badgeText && (
            <Badge
              position="absolute"
              top={2}
              right={2}
              colorScheme="teal"
            >
              {badgeText}
            </Badge>
          )}
        </Box>

        <Heading color="#474787" size="md">{title}</Heading>

        <Text color="#40407a" noOfLines={3}>{description}</Text>

        <HStack spacing={4} pt={2}>
          <Button
            as="a"
            href={demoHref}
            target="_blank"
            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
            aria-label="Explore"
          >
            See more
          </Button>

          {codeHref && (
            <Box as="a" href={codeHref} target="_blank" aria-label="View Source">
              <FontAwesomeIcon icon={faCode} size="lg" />
            </Box>
          )}

          {demoHref && (
            <Box as="a" href={demoHref} target="_blank" aria-label="Visit Demo">
              <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
            </Box>
          )}
        </HStack>
      </VStack>
    </MotionBox>
  );
}
