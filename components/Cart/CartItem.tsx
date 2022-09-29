import type { NextPage } from "next";
import {
  Box,
  Container,
  Text,
  Button,
  Image,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import { data } from "../../data/product";

const CartItem: NextPage = () => {
  const CardElement = data?.map((val) => {
    return (
      <Container
        maxW={"100%"}
        display="flex"
        key={val.id}
        gap="5"
        flexDir={["column", "column", "row"]}
      >
        <Box
          borderRadius="xl"
          boxShadow="lg"
          p="2"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Image src={val.image[0]} width="28" height="28" alt={val.name} />
        </Box>
        <Box>
          <Box
            display="flex"
            gap="10"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Text>{val.name}</Text>
            <Text>${val.price}</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box
              width="max-content"
              display="flex"
              gap="1"
              alignItems="center"
              mt="3"
            >
              <Button colorScheme="red" size="sm">
                -
              </Button>
              <Input
                borderColor="facebook.400"
                width="75px"
                value={6}
                textAlign="center"
                size="sm"
              />
              <Button colorScheme="green" size="sm">
                +
              </Button>
            </Box>
            <IconButton
              aria-label="Close"
              size="sm"
              icon={<CloseIcon />}
              colorScheme="red"
            />
          </Box>
        </Box>
      </Container>
    );
  });

  return <>{CardElement}</>;
};

export default CartItem;
