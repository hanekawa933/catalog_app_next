import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import { Container, Grid, Button, Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import { data } from "../data/product";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useStateContext } from "../context/ContextProvider";
import Head from "next/head";
import { useEffect, useState } from "react";

const Shop: NextPage = () => {
  const newData = [...data, ...data, ...data, ...data, ...data, ...data];

  const [count, setCount] = useState<number>(8);

  const setNewCount = () => {
    setCount(count + 8);
  };

  useEffect(() => {}, [count]);

  const CardElement = newData
    ?.map((val) => {
      return <Card key={val.id} product={val} />;
    })
    .slice(0, count);

  const { initialIsSidebarOpen, initialIsCartOpen } = useStateContext();
  return (
    <div>
      <Head>
        <title>Rastronaut | Product List</title>
      </Head>
      <Navbar />
      <Container
        as="section"
        maxW="100%"
        filter={
          initialIsSidebarOpen || initialIsCartOpen ? "blur(3px)" : "none"
        }
      >
        <Banner
          text="Find your desired product"
          heading="shop"
          image="/img/banner/b1.jpg"
        />
        <Box py="20">
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
          {count < newData.length || count !== newData.length ? (
            <Box display="flex" justifyContent="center" mt="10">
              <Button onClick={() => setNewCount()} colorScheme="facebook">
                Load More
              </Button>
            </Box>
          ) : null}
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
