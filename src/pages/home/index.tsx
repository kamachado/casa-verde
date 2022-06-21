import NewsLetter from "../../components/newsLetter"
import homeImage from "../../assents/home-image.png"
import "./home.scss"
import iconList from "../../assents/iconList.png"
import imageList from "../../assents/image-myplant.png"
import Api from "../../api"
import { useEffect, useState } from "react"
import Product from "../../components/product"

interface DataProduct {
    name: string,
    preco: number,
    img: string,
    ordem: number
}

export default function Home() {
    const api = new Api();
    const [listProduct, setListProduct] = useState<DataProduct[]>([]);

    function getListProduct(): void {
         api.getList().then((json) => setListProduct(json));
        
    }

    useEffect(getListProduct,[])

    const listIdeas = [
        "Escolha suas plantas",
        "Faça seu pedido",
        "Aguarde na sua casa"
    ];
    return (
        
        <section>
            <div className="div-home" >
                <NewsLetter />
                <img className="image-home" src={homeImage} />
            </div>
            <div className="container-list">
                <img className="image-list" src={imageList}></img>
                <p className="title-list1">Como conseguir </p>
                <h6 className="title-list2" >minha planta</h6>
                <ul className="home-list">
                    {listIdeas.map(item => <><img className="icon-list" src={iconList} /><li className="item-list">{item}</li></>)}
                </ul>
            </div>
            <h6>Conheça nossas</h6>
            <h4>ofertas</h4>
            <div>
            {listProduct?.map((item) => <Product  name={item.name} value={item.preco} img={item.img} />)}
            </div>
            

        </section>


    )
}