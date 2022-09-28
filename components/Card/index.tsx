import { NextPage } from "next";
import {
  Badge,
  Box,
  Button,
  Circle,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { Product } from "../../data/product";

const Card: NextPage<{ product: Product }> = ({
  product: { id, price, image, category, name },
}) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      background="gray.100"
      borderRadius="xl"
      boxShadow="2xl"
      p={["10", "5", "10"]}
      fontFamily="mono"
    >
      <Image src={image[0]} alt="Test" />
      <Heading
        as="h5"
        fontSize="base"
        fontWeight="normal"
        color="gray.500"
        mt="3"
        fontFamily="mono"
      >
        {category}
      </Heading>
      <Heading as="h4" fontSize="base" fontFamily="mono">
        {name}
      </Heading>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="5"
      >
        <Badge colorScheme="facebook" fontSize="xl">
          {price}$
        </Badge>
        <Button colorScheme="facebook" variant="outline">
          <Link href={`/product/${id}`} _hover={{ textDecor: "none" }}>
            Details
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
