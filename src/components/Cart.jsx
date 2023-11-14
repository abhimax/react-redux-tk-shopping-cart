import { useDispatch, useSelector } from "react-redux";
import productList from "../data/productList.json";
import "../styles/cart.scss";
import { cartActions } from "../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartProductIDs } = useSelector((state) => state.cart);
  console.log("productList", productList);
  console.log("cartProductIDs", cartProductIDs);
  const selectedProducts = productList.products.filter((product) =>
    cartProductIDs.includes(product.id)
  );
  const handleRemoveCard = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  const handleCheckout = () => {
    dispatch(cartActions.clearAllItems());
  };
  console.log("selectedProducts", selectedProducts);
  return (
    <div className="cart">
      {selectedProducts.length > 0 ? (
        <div className="cart-product">
          <h3 className="header">Items in cart</h3>
          {selectedProducts.map((product) => (
            <div key={product.id} className="row">
              <img
                className="item-image"
                src={product.imageUrl}
                alt="product"
              />

              <div className="item-info">
                <h4>{product.name}</h4>
                <p className="text-truncate">{product.detail}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleRemoveCard(product.id)}
                >
                  <i className="bi bi-trash-fill" /> Remove Item
                </button>
              </div>
            </div>
          ))}

          <footer className="text-center">
            <button className="btn btn-primary" onClick={handleCheckout}>
              CHECKOUT
            </button>
          </footer>
        </div>
      ) : (
        <div className="text-center empty-cart">
          <i className="bi bi-cart3" />
          <p>Your cart is empty.</p>
          <p>You have not added any item to your cart.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
