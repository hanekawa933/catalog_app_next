import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import {
  Container,
  Box,
  Heading,
  Text,
  Divider,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Select from "react-select";
import { data_category, data_product_name } from "../data/product";
import { useStateContext } from "../context/ContextProvider";
import Head from "next/head";

const Shop: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { initialIsSidebarOpen, initialIsCartOpen } = useStateContext();
  return (
    <Box>
      <Head>
        <title>Rastronaut | Contact Us</title>
      </Head>
      <Navbar />
      <Box
        filter={
          initialIsSidebarOpen || initialIsCartOpen ? "blur(3px)" : "none"
        }
      >
        <Container as="section" maxW="100%">
          <Banner
            text="your problem is our problem too"
            heading="Contact"
            image="/img/banner/b2.jpg"
          />
        </Container>
        <Container as="section" maxW={["100%", "100%", "70%", "50%"]} py="20">
          <Box
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Heading fontSize="4xl">Information</Heading>
            <Text fontSize="xl" color="gray.500" mt="3">
              Send us your information to see what happens
            </Text>
            <Divider
              height="2px"
              background="facebook.400"
              width={["20%", "20%", "10%", "7%"]}
              mt="4"
            />
          </Box>
          <Box py="10">
            <Box display="flex" width="100%" gap="8">
              <Box flex="1">
                <Text mb="1">Full Name</Text>
                <Input size="lg" borderColor="facebook.300" />
              </Box>
              <Box flex="1">
                <Text mb="1">Email</Text>
                <Input size="lg" borderColor="facebook.300" />
              </Box>
            </Box>
            <Box>
              <Text mt="6" mb="1">
                Product Category
              </Text>
              <Select
                options={data_category}
                placeholder="Choose or Type Category"
              />
            </Box>
            <Box>
              <Text mt="6" mb="1">
                Product Name
              </Text>
              <Select
                options={data_product_name}
                placeholder="Choose or Type Name"
              />
            </Box>
            <Box>
              <Text mt="6" mb="1">
                Bought Date
              </Text>
              <Input size="lg" borderColor="facebook.300" type="date" />
            </Box>
            <Button
              colorScheme="facebook"
              mt="6"
              float="right"
              onClick={onOpen}
            >
              Submit
            </Button>
          </Box>
        </Container>
        <Footer />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Please make sure your data is correct so we can see what happen
              furthermore.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="outline"
              colorScheme="facebook"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="facebook">Yes, the data is correct</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Shop;
