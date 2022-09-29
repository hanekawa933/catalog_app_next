import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import {
  Container,
  Button,
  Box,
  Image,
  Heading,
  Text,
  Grid,
  Divider,
  Input,
  Link,
} from "@chakra-ui/react";
import Card from "../components/Card";
import FeaturedCard from "../components/FeaturedCard";
import { data } from "../data/product";
import { data_feature } from "../data/featured";
import Footer from "../components/Footer";
import NextLink from "next/link";
import { useStateContext } from "../context/ContextProvider";
import Head from "next/head";

const Home: NextPage = () => {
  const { initialIsSidebarOpen, initialIsCartOpen } = useStateContext();

  const CardElement = data?.map((val) => {
    return <Card key={val.id} product={val} />;
  });

  const Temp = [...CardElement];
  const TempReversed = Temp.reverse();

  const FeatureElement = data_feature
    ?.map((val) => {
      return <FeaturedCard key={val.id} featured={val} />;
    })
    .slice(0, 2);

  const FeatureElementTwo = data_feature
    ?.map((val) => {
      return <FeaturedCard key={val.id} featured={val} />;
    })
    .slice(2, 5);

  return (
    <div>
      <Head>
        <title>Rastronaut | Homepage</title>
      </Head>
      <Navbar />
      <Box
        filter={
          initialIsSidebarOpen || initialIsCartOpen ? "blur(3px)" : "none"
        }
      >
        <Container position="relative" px="0" maxW="100%">
          <Image
            src="/img/hero4.png"
            alt="Hero Image"
            position="absolute"
            h={["400px", "500px", "600px", "600px", "672px"]}
            width="100%"
            objectFit={["cover", "cover", "cover", "fill"]}
            transition="ease-in-out 0.2s"
          />
          <Box
            position="relative"
            width={["85%", "70%", "60%", "60%"]}
            display="flex"
            justifyContent="center"
            flexDir="column"
            h={["400px", "500px", "600px", "600px", "672px"]}
            pl={["4", "8", "10", "20"]}
            transition="ease-in-out 0.2s"
          >
            <Heading
              as="h4"
              fontSize={["md", "lg", "xl", "2xl", "3xl"]}
              color="gray.500"
              transition="ease-in-out 0.2s"
            >
              Best deal in your life
            </Heading>
            <Heading
              as="h1"
              fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
              transition="ease-in-out 0.2s"
            >
              Find your{" "}
              <Box as="span" color="facebook.500">
                dream product
              </Box>{" "}
              in just a second.
            </Heading>
            <Text
              color="gray.700"
              my="2"
              fontSize={["base", "md", "lg", "xl", "2xl"]}
              transition="ease-in-out 0.2s"
            >
              Interesting sale is waiting for you!
            </Text>
            <NextLink href="/shop" passHref>
              <Button
                alignSelf="flex-start"
                colorScheme="facebook"
                mt="3"
                size={["md", "md", "lg"]}
                transition="ease-in-out 0.2s"
              >
                <Link href="/shop" _hover={{ textDecoration: "none" }}>
                  Shop Now
                </Link>
              </Button>
            </NextLink>
          </Box>
        </Container>
        <Container maxW="100%" py="20">
          <Box
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Heading fontSize="4xl">Featured Products</Heading>
            <Text fontSize="xl" color="gray.500" mt="3">
              Our best seller product
            </Text>
            <Divider
              height="2px"
              background="facebook.400"
              width={["20%", "20%", "10%", "7%"]}
              mt="4"
            />
          </Box>
          <Grid
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap="5"
            px="4"
          >
            {CardElement}
          </Grid>
        </Container>
        <Container maxW="100%" py="10">
          <Box
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Heading fontSize="4xl">Recommended For You</Heading>
            <Text fontSize="xl" color="gray.500" mt="3">
              This is what we got for you
            </Text>
            <Divider
              height="2px"
              background="facebook.400"
              width={["20%", "20%", "10%", "7%"]}
              mt="4"
            />
          </Box>
          <Grid
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap="5"
            px="4"
          >
            {TempReversed}
          </Grid>
        </Container>
        <Container maxW="100%" py="10">
          <Box
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Heading fontSize="4xl">More News</Heading>
            <Text fontSize="xl" color="gray.500" mt="3">
              The more you can see
            </Text>
            <Divider
              height="2px"
              background="facebook.400"
              width={["20%", "20%", "10%", "7%"]}
              mt="4"
            />
          </Box>
          <Grid
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap="5"
            px="4"
            py="10"
          >
            {FeatureElement}
          </Grid>
          <Grid
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap="5"
            px="4"
          >
            {FeatureElementTwo}
          </Grid>
        </Container>
        <Container
          maxW="100%"
          py="10"
          background="facebook.900"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir={["column", "column", "column", "row", "row"]}
          px={["10", "10", "10", "10", "20"]}
          my="10"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={["center", "center", "center", "flex-start"]}
            width={["100%", "100%", "100%", "100%", "50%"]}
          >
            <Heading fontSize="4xl" color="white">
              Sign up for newsletter
            </Heading>
            <Text fontSize="xl" color="gray.400" mt="3" fontWeight="semibold">
              Send us your email to be updated
            </Text>
          </Box>
          <Box
            mt="5"
            display="flex"
            width={["100%", "100%", "100%", "100%", "50%"]}
          >
            <Input width="100%" background="white" placeholder="Email" />
            <Button ml="2" colorScheme="twitter">
              Submit
            </Button>
          </Box>
        </Container>
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
