import type { NextPage } from "next";
import { Box, Flex, Container, ListItem, Link, List } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Icon } from "@iconify/react";
import { useStateContext } from "../../context/ContextProvider";
import NextLink from "next/link";
import { useEffect } from "react";

const Sidebar: NextPage = () => {
  const { toggleSidebar, initialIsSidebarOpen } = useStateContext();
  const homeIcon = "ant-design:home-filled";
  const shopIcon = "entypo:shop";
  const phoneIcon = "akar-icons:phone";

  useEffect(() => {
    if (initialIsSidebarOpen) {
      document.querySelector("#body")?.classList.add("overflowYHidden");
    } else {
      document.querySelector("#body")?.classList.remove("overflowYHidden");
    }
  });

  return (
    <Container
      maxW={["80%", "80%", "60%"]}
      height="100vh"
      background="gray.100"
      position="fixed"
      top="0"
      right={initialIsSidebarOpen ? "0" : "-100%"}
      zIndex="100"
      transition="ease-out 0.2s"
      // opacity={initialIsSidebarOpen ? "1" : "0"}
      display={["initial", "initial", "initial", "none"]}
    >
      <Box position="relative">
        <Box
          position="absolute"
          top="5"
          right="1"
          cursor="pointer"
          onClick={() => toggleSidebar()}
        >
          <CloseIcon fontSize="30" />
        </Box>
        <List
          as="nav"
          display="flex"
          flexDir="column"
          gap="10"
          py="24"
          px="5"
          fontFamily="mono"
        >
          <ListItem borderRadius="xl" boxShadow="xl">
            <NextLink href="/" passHref>
              <Link
                href="/"
                display="flex"
                alignItems="center"
                gap="3"
                p="5"
                _hover={{ textDecoration: "none" }}
                onClick={() => toggleSidebar()}
              >
                <Icon icon={homeIcon} fontSize="1.5rem" />
                <Box as="span" fontSize="1.5rem">
                  Home
                </Box>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem borderRadius="xl" boxShadow="xl">
            <NextLink href="/shop" passHref>
              <Link
                display="flex"
                alignItems="center"
                gap="3"
                p="5"
                _hover={{ textDecoration: "none" }}
                onClick={() => toggleSidebar()}
              >
                <Icon icon={shopIcon} fontSize="1.5rem" />
                <Box as="span" fontSize="1.5rem">
                  Shop
                </Box>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem borderRadius="xl" boxShadow="xl">
            <NextLink href="/contact" passHref>
              <Link
                display="flex"
                alignItems="center"
                gap="3"
                p="5"
                _hover={{ textDecoration: "none" }}
                onClick={() => toggleSidebar()}
              >
                <Icon icon={phoneIcon} fontSize="1.5rem" />
                <Box as="span" fontSize="1.5rem">
                  Contact
                </Box>
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Sidebar;
