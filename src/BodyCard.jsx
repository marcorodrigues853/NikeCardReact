function Body(props) {

  const {title, description} = props;
return (
  <div className="main-content">
  <h2 className="title">
    {title}
  </h2>
  <p className="description">
    {description}
  </p>
</div>
)
}

export default Body;
