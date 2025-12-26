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
  { url: "https://medium.com/...", icon: faMedium, Label:"Medium" },
  { url: "https://stackoverflow.com/users/23600808/de-river", icon: faStackOverflow, Label:"StackOverflow" },
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
          // 向下滚动，隐藏 Header（向上位移 headerHeight）
          headerRef.current.style.transform = "translateY(-100%)";
        } else {
          // 向上滚动，显示 Header
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
      transform="translateY(0)"                     // 初始状态
      transitionProperty="transform"               // 启用 transform 过渡
      transitionDuration="0.3s"                    // 过渡时长
      transitionTimingFunction="ease-in-out"       // 缓动
      backgroundColor="#18181b"
      color="white"
      zIndex="1000"
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
          {/* 左侧社交图标 */}
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

          {/* 右侧锚点链接 */}
          <nav>
            <HStack spacing={8}>
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
