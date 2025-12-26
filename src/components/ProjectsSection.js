import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: require("../images/photo1.jpg"),
    demoHref: "https://example.com/react-space",
    codeHref: "https://github.com/username/react-space",
  },
  // ... add other project entries here
    {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    imageSrc: require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageSrc: require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageSrc: require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => (
  <FullScreenSection
    backgroundColor="#14532d"
    isDarkBackground
    py={8}
    alignItems="flex-start"
    spacing={8}
  >
    <Heading as="h1" id="projects-section">
      Featured Projects
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%">
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          demoHref={project.demoHref}
          codeHref={project.codeHref}
        />
      ))}
    </SimpleGrid>
  </FullScreenSection>
);

export default ProjectsSection;