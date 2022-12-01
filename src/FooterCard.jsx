function Footer(props){

    const {footerDescription}=props;
  return(
    <div className="card-footer">
        <button className="btn-buy">
            Buy
        </button>
        <span className="product-category">{footerDescription}</span>
    </div>)
}

export default Footer;
