import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import {
  Container,
  Grid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Button,
  Link,
  Box,
} from "@chakra-ui/react";
import Banner from "../components/Banner";
import { data } from "../data/product";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NextLink from "next/link";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { useStateContext } from "../context/ContextProvider";

import Head from "next/head";
import { useRouter } from "next/router";

const Shop: NextPage = () => {
  const [view, setView] = useState<string>("card");
  const [arrow, setArrow] = useState<boolean>(true);
  const [product, setProduct] = useState(data);

  const { initialIsLogin } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    if (!initialIsLogin) router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialIsLogin]);

  const setViewProduct = (type: string) => {
    setView(type);
  };

  const CardElement = product?.map((val) => {
    return <Card key={val.id} product={val} />;
  });

  const CardTable = product?.map((val) => {
    return (
      <Tr key={val.id}>
        <Td>
          <Image src={val.image[0]} alt="Test" width="40" height="40" />
        </Td>
        <Td>{val.category}</Td>
        <Td>{val.name}</Td>
        <Td>${val.price}</Td>
        <Td>
          <NextLink href={`/product/${val.id}`} passHref>
            <Button colorScheme="facebook" variant="outline">
              <Link _hover={{ textDecoration: "none" }}>Details</Link>
            </Button>
          </NextLink>
        </Td>
      </Tr>
    );
  });

  const setProductByPrice = () => {
    setArrow(!arrow);

    if (arrow) setProduct([...product].sort((a, b) => b.price - a.price));

    if (!arrow) setProduct([...product].sort((a, b) => a.price - b.price));
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

  const { initialIsSidebarOpen, initialIsCartOpen } = useStateContext();

  return (
    <div>
      <Head>
        <title>Rastronaut | Shoping List</title>
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
          text="List of your product"
          heading="Your Product"
          image="/img/about/banner.png"
        />
        <Box display="flex" gap="2" justifyContent="end" p="5">
          <Button
            colorScheme="facebook"
            onClick={() => setViewProduct("table")}
          >
            <Icon icon="ant-design:table-outlined" />
          </Button>
          <Button colorScheme="facebook" onClick={() => setViewProduct("card")}>
            <Icon icon="bxs:card" />
          </Button>
          <Button
            colorScheme="facebook"
            rightIcon={!arrow ? <ArrowDownIcon /> : <ArrowUpIcon />}
            onClick={() => setProductByPrice()}
          >
            Sort By Price
          </Button>
        </Box>

        {view === "card" ? (
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
          </Grid>
        ) : (
          <TableContainer px="4">
            <Table variant="simple" colorScheme="facebook">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Photo</Th>
                  <Th>Category</Th>
                  <Th>Product Name</Th>
                  <Th>Price</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody>{CardTable}</Tbody>
            </Table>
          </TableContainer>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
