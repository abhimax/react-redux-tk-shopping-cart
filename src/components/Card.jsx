const Card = ({ id, name, price, imageUrl }) => {
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
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
