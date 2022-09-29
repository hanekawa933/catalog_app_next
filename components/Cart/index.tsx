import type { NextPage } from "next";
import {
  Box,
  Container,
  ListItem,
  List,
  Text,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useStateContext } from "../../context/ContextProvider";
import NextLink from "next/link";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart: NextPage = () => {
  const {
    toggleCart,
    initialIsCartOpen,
    initialIsLogin,
    initialIsSidebarOpen,
  } = useStateContext();
  const [cw, setCw] = useState<number>(0);

  useEffect(() => {
    function setWindowSize() {
      setCw(window?.innerWidth);
    }

    window.addEventListener("resize", setWindowSize);

    if (initialIsCartOpen || initialIsSidebarOpen) {
      if (cw > 769) {
        toggleCart();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cw]);

  useEffect(() => {
    if (initialIsCartOpen) {
      document.querySelector("#body")?.classList.add("overflowYHidden");
    } else {
      document.querySelector("#body")?.classList.remove("overflowYHidden");
    }
  });

  return (
    <Container
      maxW={["80%", "80%", "60%", "40%", "30%"]}
      height="100vh"
      background="gray.100"
      position="fixed"
      top="0"
      right={initialIsCartOpen ? "0" : "-100%"}
      zIndex="100"
      transition="ease-out 0.2s"
      overflowY="auto"
    >
      <Box position="relative">
        <Box
          position="absolute"
          top="5"
          right="1"
          cursor="pointer"
          onClick={() => toggleCart()}
        >
          <CloseIcon fontSize="30" />
        </Box>
        {initialIsLogin ? (
          <List
            as="nav"
            display="flex"
            flexDir="column"
            gap="10"
            py="24"
            px="5"
            fontFamily="mono"
          >
            <Heading>Your Cart</Heading>
            <CartItem />
            <ListItem
              display="flex"
              justifyContent="center"
              flexDir="column"
              gap="5"
            >
              <Box display="flex" justifyContent="space-between">
                <Box>Subtotal:</Box>
                <Box>$1000</Box>
              </Box>
              <Button colorScheme="facebook" borderRadius="5000px" width="100%">
                Buy Right Now
              </Button>
            </ListItem>
          </List>
        ) : (
          <Box textAlign="center" px="5" py="24">
            <Image
              src="/svg/404.svg"
              alt="404 Not Found"
              height="48"
              width="100%"
            />
            <Heading>No cart to show</Heading>
            <Text color="gray.500">Seems you are not logged in yet.</Text>
            <NextLink href="/login" passHref>
              <Button
                colorScheme="facebook"
                mt="5"
                onClick={() => toggleCart()}
              >
                Login Now
              </Button>
            </NextLink>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Cart;
