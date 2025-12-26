import React, { useRef, useEffect } from "react";
import { Box, HStack,Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { url: "https://github.com/River1math", icon: faGithub, label: "Github" },
  { url: "https://www.linkedin.com/in/river-lee-156403179/", icon: faLinkedin, label: "Linkedin"},
  { url: "https://medium.com/...", icon: faMedium, label:"Medium" },
  { url: "https://stackoverflow.com/users/23600808/de-river", icon: faStackOverflow, label:"StackOverflow" },
];

const Header = () => {
  // Ref to the root Box so we can change its transform
  const headerRef = useRef(null);
  // Store previous scroll position
  const prevScrollY = useRef(0);

  // Smooth‐scroll handler factory
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // On mount, subscribe to scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (headerRef.current) {
        if (currentScrollY > prevScrollY.current) {
        
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
    
          headerRef.current.style.transform = "translateY(0)";
        }
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={headerRef}
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)"                     
      transitionProperty="transform"               
      transitionDuration="0.3s"                    
      transitionTimingFunction="ease-in-out"     
      color="white"
      zIndex="1000"
      bg="#8395a7"
    >
      <Box maxW="1280px" mx="auto">
        <HStack
          px={{ base: 4, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" 
              bgClip="text"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="extrabold"
            letterSpacing="wide"
          >
            River de 
          </Text>
    
          <nav>
            <HStack spacing={{ base: 4, md: 6 }} display={{ base: 'none', md: 'flex' }}>
              {socials.map(({icon, url, label}) => (
                <Box 
                  key={url} 
                  transition="all 0.3s"
                  _hover={{ 
                    transform: "translateY(-3px)",
                    color: "cyan.400"
                  }}
                >
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <FontAwesomeIcon icon={icon} size="lg" />
                  </a>
                </Box>
              ))}
            </HStack>
          </nav>

        
          <nav>
            <HStack color="black" fontWeight="semibold" spacing={8}>
              <a href="/#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a
                href="/#contactme-section"
                onClick={handleClick("contactme")}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
