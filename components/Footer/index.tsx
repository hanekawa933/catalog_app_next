import {
  Container,
  Box,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <Container
      maxW="100%"
      py="10"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir={["column", "column", "column", "row", "row"]}
      px={["10", "10", "10", "10", "20"]}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={["center", "center", "center", "flex-start"]}
        width={["100%", "100%", "100%", "40%", "40%"]}
      >
        <Heading fontSize="4xl" color="white">
          <Box display="flex" alignItems="center" gap="4" as="a" href="/">
            <Image src="/img/logo.png" alt="Logo" width="40px" height="40px" />
            <Box
              fontWeight="bold"
              fontFamily="mono"
              fontSize="1.4rem"
              color="facebook.900"
            >
              Rastronaut
            </Box>
          </Box>
        </Heading>
        <Text fontSize="lg" fontWeight="semibold" mt="8">
          Contact
        </Text>
        <Text
          fontSize="lg"
          fontWeight="semibold"
          textAlign={["center", "center", "center", "left"]}
        >
          Address:{" "}
          <Box
            as="span"
            fontWeight="normal"
            display={["block", "block", "block", "inline"]}
          >
            Ps. Manggis, Kecamatan Setiabudi
          </Box>
        </Text>
        <Text
          fontSize="lg"
          fontWeight="semibold"
          textAlign={["center", "center", "center", "left"]}
        >
          Phone:{" "}
          <Box
            as="span"
            fontWeight="normal"
            display={["block", "block", "block", "inline"]}
          >
            +621234567890
          </Box>
        </Text>
        <Text
          fontSize="lg"
          fontWeight="semibold"
          textAlign={["center", "center", "center", "left"]}
        >
          Open Hours:{" "}
          <Box
            as="span"
            fontWeight="normal"
            display={["block", "block", "block", "inline"]}
          >
            08:00 - 17:00
          </Box>
        </Text>
      </Box>
      <Box display="flex" gap="20" mt="10" flexDir={["column", "row"]}>
        <Box display="flex" flexDir="column">
          <Text fontWeight="semibold" fontSize="lg">
            About
          </Text>
          <List color="facebook.900" mt="3">
            <ListItem>
              <Link href="#">About Us</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Delivery Information</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Terms & Condition</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Customer Services</Link>
            </ListItem>
          </List>
        </Box>
        <Box display="flex" flexDir="column">
          <Text fontWeight="semibold" fontSize="lg">
            Account
          </Text>
          <List color="facebook.900" mt="3">
            <ListItem>
              <Link href="#">Sign In</Link>
            </ListItem>
            <ListItem>
              <Link href="#">My Wallet</Link>
            </ListItem>
            <ListItem>
              <Link href="#">View Cart</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Track Order</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Help</Link>
            </ListItem>
          </List>
        </Box>
        <Box display="flex" flexDir="column">
          <Text fontWeight="semibold" fontSize="lg">
            Install App
          </Text>
          <Text fontWeight="semibold" color="gray.500">
            From App Store or Google Store
          </Text>
          <List display="flex" gap="3" mt="2" flexDir="column">
            <ListItem cursor="pointer">
              <Image
                src="/img/gplay.png"
                alt="Google Play"
                height="50px"
                width="150px"
              />
            </ListItem>
            <ListItem cursor="pointer">
              <Image
                src="/img/pstore.png"
                alt="Play Store"
                width="150px"
                height="50px"
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
