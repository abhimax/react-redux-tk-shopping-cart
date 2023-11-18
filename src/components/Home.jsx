//import productList from "../data/productList.json";
import { useDispatch, useSelector } from "react-redux";
import "../styles/home.scss";
import Card from "./Card";
import { useEffect } from "react";
import { fetchAllProducts } from "../store/slices/productSlice";

const Home = () => {
  const { products } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts("http://localhost:3000/products"));
  }, [dispatch]);
  return (
    <div className="container product-catalogue">
      <div className="row">
        {products.data?.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
