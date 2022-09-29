import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Box,
  InputRightElement,
  InputGroup,
  useToast,
  Image,
  Container,
  Heading,
} from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import Head from "next/head";

import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { useStateContext } from "../context/ContextProvider";

const Login = () => {
  const { initialIsSidebarOpen, initialIsCartOpen } = useStateContext();
  const toast = useToast();
  const Router = useRouter();
  const [hidden, setHidden] = useState(true);

  const Schema = Yup.object().shape({
    email: Yup.string()
      .required("Email tidak boleh kosong")
      .email("Email tidak valid"),
    password: Yup.string().required("Password tidak boleh kosong"),
  });

  const viewPassword = () => {
    setHidden(!hidden);
  };

  const { authLogin } = useStateContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: async (values, { resetForm, setSubmitting, setFieldValue }) => {
      await authLogin();
      resetForm();
      setFieldValue("email", values.email);
      await Router.push("/shoping_list");
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    handleBlur,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Head>
        <title>Rastronaut | Login</title>
      </Head>
      <Navbar />
      <Container maxW="100%" position="relative">
        <Box
          filter={
            initialIsSidebarOpen || initialIsCartOpen ? "blur(3px)" : "none"
          }
        >
          <Image
            src="/img/about/a5.jpg"
            alt="Bg login"
            width="xl"
            height="xl"
            top="50%"
            left="50%"
            transform="translate(-50%, -10%)"
            position="relative"
            zIndex="-999"
            display={["none", "none", "none", "initial"]}
          />
          <Box
            position="absolute"
            w={["100%", "100%", "70%", "50%"]}
            top="50%"
            left="50%"
            transform={[
              "translate(-50%, 30%)",
              "translate(-50%, 30%)",
              "translate(-50%, 30%)",
              "translate(-50%, -50%)",
            ]}
            background="#ffffff99"
            mx="auto"
            p="10"
          >
            <Heading>Welcome back, spacer!</Heading>
            <Heading
              mb="3"
              fontWeight="semibold"
              color="gray.500"
              fontSize="base"
            >
              Ready to fly?
            </Heading>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <FormControl
                id="email"
                isInvalid={Boolean(touched.email && errors.email)}
              >
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  {...getFieldProps("email")}
                  onBlur={handleBlur}
                  borderColor="facebook.900"
                  _hover={{ borderColor: "facebook.400" }}
                />
                <FormErrorMessage>
                  {touched.email && errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                pt="5"
                isInvalid={Boolean(touched.password && errors.password)}
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={hidden ? "password" : "text"}
                    {...getFieldProps("password")}
                    onBlur={handleBlur}
                    borderColor="facebook.900"
                    _hover={{ borderColor: "facebook.400" }}
                  />
                  <InputRightElement
                    mx="3"
                    cursor="pointer"
                    onClick={() => viewPassword()}
                  >
                    {hidden ? (
                      <ViewIcon w={6} h={6} />
                    ) : (
                      <ViewOffIcon w={6} h={6} />
                    )}
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {touched.password && errors.password}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="facebook"
                w="100%"
                isLoading={isSubmitting}
                mt="5"
              >
                Login
              </Button>
            </Form>
          </Box>
        </Box>
      </Container>
    </FormikProvider>
  );
};

export default Login;
