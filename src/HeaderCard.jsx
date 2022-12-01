
function Header(props){

  const {price, brand} = props

return (
<div className="card-header">
  <div className="brand">
      <img src="https://i.ibb.co/q7RKcZk/nike.png" alt={brand} />
  </div>
  <div className="price">
      <span>{price}€</span>
  </div>
</div>
)
};

export default Header;
