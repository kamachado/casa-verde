import './product.scss'

interface ProductProps {
    name: string,
    img: string,
    value: number
}

export default function Product(props: ProductProps) {

    const { name, img, value } = props;
    const editValue=`Preço: ${value} reais `
    return (
        <div className="product-div">
            <h6 className="product-name">{name}</h6>
            <p className="product-value">{editValue}</p>
            <img className="product-image" src={img} />
            <button className='button-product'>Comprar</button>
        </div>

    )

}