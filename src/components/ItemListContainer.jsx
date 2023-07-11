import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};
