import { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    {
      brand: "Polo Ralph Lauren",
      name: "Óculos de sol redondo",
      price: 1800,
      image:
        "https://cdn-images.farfetch-contents.com/17/49/79/52/17497952_36344509_1000.jpg",
    },
    {
      brand: "Nike",
      name: "Camiseta de algodão com logo",
      price: 676,
      image:
        "https://cdn-images.farfetch-contents.com/16/77/60/99/16776099_33733018_600.jpg",
    },
    {
      brand: "Nike",
      name: "Calça esportiva oversized",
      price: 1319,
      image:
        "https://cdn-images.farfetch-contents.com/17/70/14/94/17701494_37112833_600.jpg",
    },
    {
      brand: "Nike",
      name: "Tênis Air Jordan 4 Retro",
      price: 6508,
      image:
        "https://cdn-images.farfetch-contents.com/14/07/65/19/14076519_18662956_600.jpg",
    },
  ]);

  return <ProductsContext.Provider value={{products}}>
    {children}
  </ProductsContext.Provider>

};
