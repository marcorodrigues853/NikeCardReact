
import Header from './HeaderCard'
import BodyCard from './BodyCard'
import Image from './Image'
import Footer from './FooterCard'
import {Product} from './Product'


function Card(){

  const productInfo ={
    brand: 'Nike Nelson', // to feed alt of logo brand
    price: 269,
    title: 'AIR REACT 20x',
    description: `From the Flymesh upper to the triple-density foam midsole, the Nike Air Zoom Structure 19 Men's Running Shoe offers plenty of support and the response you need for a smooth, stable ride that feels ultra fast.`,
    image: 'image',
    footerDescription:'MEN REACT SHOES',
    textEffect: 'AIR'
  }

  const product = new Product(productInfo);

  return(
    <div className="product-card">
    <div className="card-body">

      <Header  price={product.price} brand={product.brand}/>
      <BodyCard title={product.title} description={product.description}/>
      <span className="text-effect">{product.textEffect}</span>

      </div>
        <Image/>
        <Footer footerDescription={product.footerDescription}/>
    </div>

  )


}

export default Card;
