import './product.scss'
import img from '../../assents/products/product-03.png'
import { FiArrowRight } from "react-icons/fi";

interface ProductProps {
    name: string,
    value: number
     
}

export default function Product(props: ProductProps) {
    const { name, value } = props;
    const editValue=`Preço: ${value} reais `
    return (
        <div className="product-div">
            <h6 className="product-name">{name}</h6>
            <p className="product-value">{editValue}</p>
            <img className="product-image" src={img}></img>
            <button className='button-product'>Comprar<FiArrowRight className='icon-submit'></FiArrowRight></button>
        </div>

    )

}