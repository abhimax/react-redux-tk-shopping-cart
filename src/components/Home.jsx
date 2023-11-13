import productList from "../data/productList.json";
import "../styles/home.scss";
import Card from "./Card";

const Home = () => {
  return (
    <div className="container product-catalogue">
      <div className="row">
        {productList.products.map((product) => {
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
