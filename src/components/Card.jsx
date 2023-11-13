import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";

const Card = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch();

  const { cartProductIDs } = useSelector((state) => state.cart);
  console.log(cartProductIDs);
  const handleAddToCart = (id) => {
    dispatch(cartActions.addToCart(id));
    console.log("ADD");
  };
  const handleRemoveFromCart = (id) => {
    console.log("REMOVE");
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div className="wrapper col-md-4" key={id}>
      <div className="card">
        <div
          className="image-wrapper"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          {!cartProductIDs.includes(id) && (
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(id)}
            >
              Add to cart
            </button>
          )}
          {cartProductIDs.includes(id) && (
            <button
              className="btn btn-secondary"
              onClick={() => handleRemoveFromCart(id)}
            >
              Remove From cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
