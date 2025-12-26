import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),

    // 在 ContactMeSection.js 的 onSubmit 中
onSubmit: async (values, { resetForm }) => {
  const result = await submit("https://example.com/contact", values);

  if (result && result.type === "success") {
    onOpen(
      "success",
      `${values.firstName}, Thanks for your submission, we will go back to you shortly`
    );
    resetForm();
  } else if (result) {
    onOpen("error", result.message);
  }
},

});

  const { handleSubmit, getFieldProps, touched, errors } = formik;

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="100%" mx="auto" maxW="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              {/* Name */}
              <FormControl
                isInvalid={touched.firstName && Boolean(errors.firstName)}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" {...getFieldProps("firstName")} />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Email */}
              <FormControl isInvalid={touched.email && Boolean(errors.email)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email" type="email" {...getFieldProps("email")} />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              {/* Type of inquiry */}
              <FormControl>
                <FormLabel htmlFor="type">Type of inquiry</FormLabel>
                <Select bg="none" style={{color:"#fdcb6e", borderColor:'white'}}id="type" {...getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              {/* Your message */}
              <FormControl
                isInvalid={touched.comment && Boolean(errors.comment)}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  height={250}
                  {...getFieldProps("comment")}
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Submit,the snippet from ContactMeSection.js*/}
              <Button
                type="submit"
                isLoading={isLoading}
                colorScheme="purple"
                width="full"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
