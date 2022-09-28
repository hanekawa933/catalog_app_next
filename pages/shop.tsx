import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import { Container, Grid } from "@chakra-ui/react";
import Banner from "../components/Banner";
import { data } from "../data/product";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Shop: NextPage = () => {
  const CardElement = data?.map((val) => {
    return <Card key={val.id} product={val} />;
  });
  return (
    <div>
      <Navbar />
      <Container as="section" maxW="100%">
        <Banner
          text="Find your desired product"
          heading="shop"
          image="/img/banner/b1.jpg"
        />
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
          py="20"
        >
          {CardElement}
          {CardElement}
          {CardElement}
          {CardElement}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
