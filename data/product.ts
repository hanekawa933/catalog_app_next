export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
  description: string;
  tags: string[];
  image: string[];
  stock: number;
  color: string[] | undefined;
}

interface Category {
  label: string;
  value: string;
}

interface ProductName {
  label: string;
  value: string;
}

export const data_category = [
  <Category>{
    label: "T-Shirt",
    value: "T-Shirt",
  },
  <Category>{
    label: "Jeans",
    value: "Jeans",
  },
  <Category>{
    label: "Pants",
    value: "Pants",
  },
  <Category>{
    label: "Accessories",
    value: "Accessories",
  },
  <Category>{
    label: "Hijab",
    value: "Hijab",
  },
];

export const data_product_name = [
  <ProductName>{
    label: "Astronaut T-Shirt Very Cool",
    value: "Astronaut T-Shirt Very Cool",
  },
  <ProductName>{
    label: "Astronaut T-Shirt Very Good",
    value: "Astronaut T-Shirt Very Good",
  },
  <ProductName>{
    label: "Astronaut T-Shirt Very Manly",
    value: "Astronaut T-Shirt Very Manly",
  },
  <ProductName>{
    label: "Astronaut T-Shirt Very Omega",
    value: "Astronaut T-Shirt Very Omega",
  },
];

export const data = [
  <Product>{
    id: 1,
    name: "Astronaut T-Shirt Very Cool",
    category: "T-Shirt",
    price: 60,
    discount: 20,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ["T-shirt", "Man", "Cool", "Modern"],
    image: [
      "/img/products/f1.jpg",
      "/img/products/f2.jpg",
      "/img/products/f3.jpg",
    ],
    stock: 60,
    color: ["Red", "Blue", "Green"],
  },
  <Product>{
    id: 2,
    name: "Astronaut T-Shirt Very Cool",
    category: "T-Shirt",
    price: 75,
    discount: 20,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ["T-shirt", "Man", "Cool", "Modern"],
    image: [
      "/img/products/f2.jpg",
      "/img/products/f3.jpg",
      "/img/products/f1.jpg",
    ],
    stock: 60,
    color: ["Red", "Blue", "Green"],
  },
  <Product>{
    id: 3,
    name: "Astronaut T-Shirt Very Cool",
    category: "T-Shirt",
    price: 25,
    discount: 20,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ["T-shirt", "Man", "Cool", "Modern"],
    image: [
      "/img/products/f3.jpg",
      "/img/products/f2.jpg",
      "/img/products/f1.jpg",
    ],
    stock: 60,
    color: ["Red", "Blue", "Green"],
  },
  <Product>{
    id: 4,
    name: "Astronaut T-Shirt Very Cool",
    category: "T-Shirt",
    price: 25,
    discount: 20,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ["T-shirt", "Man", "Cool", "Modern"],
    image: [
      "/img/products/f4.jpg",
      "/img/products/f2.jpg",
      "/img/products/f1.jpg",
    ],
    stock: 60,
    color: ["Red", "Blue", "Green"],
  },
];
