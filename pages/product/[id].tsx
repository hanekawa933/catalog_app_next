import type { NextPage } from "next";
import Navbar from "../../components/Navbar";
import {
  Container,
  Flex,
  Button,
  Box,
  Image,
  Heading,
  Text,
  Grid,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Link,
  Badge,
} from "@chakra-ui/react";
import Card from "../../components/Card";
import { data } from "../../data/product";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import Select from "react-select";

const Home: NextPage = () => {
  const [value, setValue] = useState<number>(0);
  const router = useRouter();
  const { id } = router.query;

  const filtered = data?.filter((val) => {
    return val.id.toString() === id;
  });

  const SelectImage = filtered[0]?.image?.map((val, idx) => {
    return (
      <Image
        key={idx}
        src={val}
        alt={val}
        border="1px"
        borderRadius="xl"
        borderColor="facebook.400"
        cursor="pointer"
        width="100px"
        height="100px"
      />
    );
  });

  const Tags = filtered[0]?.tags?.map((val, idx) => {
    return (
      <Badge colorScheme="facebook" key={idx}>
        {val}
      </Badge>
    );
  });

  const Color = filtered[0]?.color?.map((val, idx) => {
    return (
      <Badge colorScheme={val.toLowerCase()} key={idx} py="2" px="3">
        {val}
      </Badge>
    );
  });

  const SelectData = [
    {
      value: "Red",
      label: "Red",
    },
    {
      value: "Blue",
      label: "Blue",
    },
    {
      value: "Green",
      label: "Green",
    },
  ];

  return (
    <div>
      <Navbar />
      <Container position="relative" maxW="100%" py="20">
        <Box
          display="flex"
          gap="10"
          flexDir={["column", "column", "column", "row"]}
        >
          <Box
            display="flex"
            flexDir="column"
            boxShadow="xl"
            p="5"
            borderRadius="xl"
          >
            <Image src={filtered[0]?.image[0]} alt="Image First" />
            <Grid gridTemplateColumns="repeat(3, 1fr)" gap="3" mx="auto" mt="2">
              {SelectImage}
            </Grid>
          </Box>
          <Box
            borderRadius="xl"
            py="10"
            px="5"
            boxShadow="xl"
            alignSelf="flex-start"
          >
            <Text color="gray.500">{filtered[0]?.category}</Text>
            <Text fontWeight="bold" fontSize="2xl">
              {filtered[0]?.name}
            </Text>
            <Text fontWeight="bold" fontSize="xl" color="facebook.300">
              ${filtered[0]?.price}
              /PCs
            </Text>
            <Box display="flex" mt="3" gap="3">
              {Tags}
            </Box>
            <Box mt="6">
              <Text fontWeight="semibold">Available Stock</Text>
              <Box display="flex" gap="3" mt="2">
                {filtered[0]?.stock} PCs
              </Box>
            </Box>
            <Box mt="6">
              <Text fontWeight="semibold">Available Color</Text>
              <Box display="flex" gap="3" mt="2">
                {Color}
              </Box>
            </Box>

            <Box display={["intial", "intial", "intial", "none"]} mt="6">
              <Text fontWeight="semibold" mb="3">
                Buy Product
              </Text>
              <Box mt="1" display="flex" gap="3" width="max-content">
                <Select options={SelectData} placeholder="Select Color" />
                <Select options={SelectData} placeholder="Select Size" />
              </Box>
              <Text fontWeight="semibold" mt="6">
                Quantity
              </Text>
              <Box
                width="max-content"
                display="flex"
                gap="3"
                alignItems="center"
                mt="3"
              >
                <Button
                  colorScheme="red"
                  isDisabled={value <= 0 ? true : false}
                  onClick={() => setValue(value - 1)}
                >
                  -
                </Button>
                <Input
                  borderColor="facebook.400"
                  width="75px"
                  value={value}
                  textAlign="center"
                />
                <Button colorScheme="green" onClick={() => setValue(value + 1)}>
                  +
                </Button>
                <Button colorScheme="facebook">Add To Cart</Button>
              </Box>
            </Box>

            <Box mt="6">
              <Text fontWeight="semibold">Product Details</Text>
              <Text>{filtered[0]?.description}</Text>
            </Box>
          </Box>
          <Box
            borderRadius="xl"
            boxShadow="xl"
            p="10"
            alignSelf="flex-start"
            flex="1"
            display={["none", "none", "none", "initial"]}
          >
            <Text fontWeight="semibold" mb="3">
              Buy Product
            </Text>
            <Box mt="1" display="flex" gap="3" flexDir="column">
              <Select options={SelectData} placeholder="Select Color" />
              <Select options={SelectData} placeholder="Select Size" />
            </Box>
            <Box
              width="max-content"
              display="flex"
              gap="3"
              alignItems="center"
              mt="3"
            >
              <Button
                colorScheme="red"
                isDisabled={value <= 0 ? true : false}
                onClick={() => setValue(value - 1)}
              >
                -
              </Button>
              <Input
                borderColor="facebook.400"
                width="75px"
                value={value}
                textAlign="center"
              />
              <Button colorScheme="green" onClick={() => setValue(value + 1)}>
                +
              </Button>
            </Box>
            <Button colorScheme="facebook" mt="3" width="100%">
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
