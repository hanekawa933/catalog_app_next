import { NextPage } from "next";
import { Box, Button, Image, List, ListItem } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      py="4"
      px={["4", "4", "10", "20"]}
      alignItems="center"
    >
      <Box display="flex" alignItems="center" gap="4" as="a" href="/">
        <Image src="/img/logo.png" alt="Logo" width="40px" height="40px" />
        <Box fontWeight="bold" fontFamily="mono" fontSize="1.4rem">
          Rastronaut
        </Box>
      </Box>
      <Box
        gap="4"
        alignItems="center"
        display={["flex", "flex", "flex", "none"]}
      >
        <Icon icon="ant-design:shop-filled" fontSize="40" cursor="pointer" />
        <Icon icon="quill:hamburger-sidebar" fontSize="40" cursor="pointer" />
      </Box>
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
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/shop">Shop</Link>
        </ListItem>
        <ListItem>
          <Link href="/contact">Contact</Link>
        </ListItem>
        <ListItem cursor="pointer" display="flex" alignItems="center" gap="4">
          <Link href="/">
            <Icon icon="ant-design:shop-filled" fontSize="2rem" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;
