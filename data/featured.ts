export interface Featured {
  id: number;
  text: string;
  heading: string;
  image: string;
  button: string;
}

export const data_feature = [
  <Featured>{
    id: 1,
    text: "Big Sale",
    heading: "Buy One Get One",
    image: "/img/banner/b7.jpg",
    button: "Check Now",
  },
  <Featured>{
    id: 2,
    text: "T-Shirt Day",
    heading: "Get Free T-shirt Now",
    image: "/img/banner/b10.jpg",
    button: "See Now",
  },
  <Featured>{
    id: 3,
    text: "No Plastic Forever",
    heading: "Get Cute Totebag",
    image: "/img/banner/b16.jpg",
    button: "Get Now",
  },
  <Featured>{
    id: 4,
    text: "Woman Wonderful",
    heading: "Beauty is from inside",
    image: "/img/banner/b18.jpg",
    button: "More Info",
  },
  <Featured>{
    id: 5,
    text: "Big News!",
    heading: "New update for customer",
    image: "/img/banner/b19.jpg",
    button: "More Info",
  },
];
