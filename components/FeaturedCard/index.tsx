import { NextPage } from "next";
import { Badge, Box, Button, Circle, Heading, Image } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Featured } from "../../data/featured";
import NextLink from "next/link";

const FeaturedCard: NextPage<{ featured: Featured }> = ({
  featured: { id, button, heading, image, text },
}) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      background="gray.100"
      boxShadow="2xl"
      role="group"
      position="relative"
      height="250px"
      borderRadius="xl"
      color="white"
    >
      <Image
        src={image}
        alt="Test"
        position="absolute"
        height="100%"
        borderRadius="xl"
        width="100%"
      />
      <Box
        position="relative"
        background="#497791ac"
        height="100%"
        display="flex"
        flexDir="column"
        justifyContent="center"
        pl="5"
        borderRadius="xl"
        _groupHover={{ background: "#0e6da1ac" }}
      >
        <Box color="gray.200" fontWeight="semibold">
          {text}
        </Box>
        <Box fontSize="xl" fontWeight="bold">
          {heading}
        </Box>
        <NextLink href={`news/${id}`}>
          <Button
            colorScheme="facebook"
            alignSelf="flex-start"
            mt="3"
            size="sm"
          >
            {button}
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default FeaturedCard;
