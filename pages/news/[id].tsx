import type { NextPage } from "next";
import Navbar from "../../components/Navbar";
import { Container, Box } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import { data_feature } from "../../data/featured";
import Footer from "../../components/Footer";
import { useStateContext } from "../../context/ContextProvider";
import Head from "next/head";
import { useRouter } from "next/router";

const Shop: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const filtered = data_feature?.filter((val) => {
    return val.id.toString() === id;
  });

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
          text={filtered[0]?.text}
          heading={filtered[0]?.heading}
          image={filtered[0]?.image}
        />
        <Box borderRadius="xl" boxShadow="xl" py="20" px={["4", "4", "20"]}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
