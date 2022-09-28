import type { NextPage } from "next";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

const Banner: NextPage<{ image: string; text: string; heading: string }> = ({
  image,
  text,
  heading,
}) => {
  return (
    <Box width="100%" borderRadius="xl" position="relative" height="xs">
      <Image
        src={image}
        alt="Banner"
        width="100%"
        height="100%"
        borderRadius="xl"
        position="absolute"
      />
      <Box
        display="flex"
        position="relative"
        color="white"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Heading
          fontWeight="bold"
          fontSize="7xl"
          textTransform="uppercase"
          letterSpacing="10px"
        >
          {heading}
        </Heading>
        <Text
          fontWeight="bold"
          fontSize="2xl"
          color="gray.400"
          textTransform="capitalize"
          mt="3"
        >
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default Banner;
