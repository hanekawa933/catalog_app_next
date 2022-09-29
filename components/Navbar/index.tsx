import { NextPage } from "next";
import {
  Box,
  Image,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import Sidebar from "../Sidebar";
import { useStateContext } from "../../context/ContextProvider";
import Cart from "../Cart";

const Navbar: NextPage = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [ch, setCh] = useState<number>(0);

  useEffect(() => {
    function getScroll() {
      setCh(window?.scrollY);
    }
    window.addEventListener("scroll", getScroll);

    if (ch >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [ch]);

  const { toggleSidebar, toggleCart, authLogout, initialIsLogin } =
    useStateContext();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      py="4"
      px={["4", "4", "10", "20"]}
      alignItems="center"
      background={scroll ? "#d2d6e4" : "#e3e6f3"}
      position="sticky"
      top="0"
      zIndex="999"
    >
      <NextLink href="/" passHref>
        <ChakraLink _hover={{ textDecoration: "none" }}>
          <Box display="flex" alignItems="center" gap="4">
            <Image src="/img/logo.png" alt="Logo" width="40px" height="40px" />
            <Box fontWeight="bold" fontFamily="mono" fontSize="1.4rem">
              Rastronaut
            </Box>
          </Box>
        </ChakraLink>
      </NextLink>
      <Box
        gap="4"
        alignItems="center"
        display={["flex", "flex", "flex", "none"]}
      >
        <Box onClick={() => toggleCart()}>
          <Icon icon="ant-design:shop-filled" fontSize="40" cursor="pointer" />
        </Box>
        <Box onClick={() => toggleSidebar()}>
          <Icon icon="quill:hamburger-sidebar" fontSize="40" cursor="pointer" />
        </Box>
        {initialIsLogin ? (
          <Menu>
            <MenuButton as={Box} cursor="pointer">
              <ChevronDownIcon fontSize="40" />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <NextLink href="/shoping_list" passHref>
                  Shoping List
                </NextLink>
              </MenuItem>
              <MenuItem onClick={() => authLogout()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : null}
      </Box>
      <Sidebar />
      <Cart />
      <List
        display={["none", "none", "none", "flex"]}
        gap="16"
        fontFamily="mono"
        fontSize="1.2rem"
        fontWeight="semibold"
        color="facebook.400"
        alignItems="center"
      >
        <ListItem>
          <NextLink href="/">Home</NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/shop">Shop</NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/contact">Contact</NextLink>
        </ListItem>
        <ListItem
          cursor="pointer"
          display="flex"
          alignItems="center"
          gap="4"
          onClick={() => toggleCart()}
        >
          <Icon icon="ant-design:shop-filled" fontSize="2rem" />
        </ListItem>
        {initialIsLogin ? (
          <ListItem>
            <Menu>
              <MenuButton as={Box} cursor="pointer">
                <ChevronDownIcon fontSize="2rem" />
              </MenuButton>
              <MenuList>
                <NextLink href="/shoping_list" passHref>
                  <MenuItem>Shoping List</MenuItem>
                </NextLink>
                <MenuItem onClick={() => authLogout()}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </ListItem>
        ) : null}
      </List>
    </Box>
  );
};

export default Navbar;
