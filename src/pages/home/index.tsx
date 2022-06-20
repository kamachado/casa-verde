import NewsLetter from "../../components/newsLetter"
import homeImage from "../../assents/home-image.png"
import "./home.scss"
import iconList from "../../assents/iconList.png"
import imageList from "../../assents/image-myplant.png"


export default function Home() {
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

        </section>


    )
}