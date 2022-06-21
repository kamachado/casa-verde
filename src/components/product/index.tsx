

interface ProductProps {
    name: string,
    img: string,
    value: number
}

export default function Product(props: ProductProps) {
    const { name, img, value } = props;
    return (
        <div>
            <img src={img} />
            <h6>{name}</h6>
            <p>{value}</p>
        </div>

    )

}