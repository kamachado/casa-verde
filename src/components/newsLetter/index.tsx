import "./newsLetter.scss"
import {BiEnvelope} from 'react-icons/bi'


export default function NewsLetter(){
    return (
        <div className="div-newsLetter">
            <p className="title-one">Sua casa com as </p>
            <h6 className="title-two">melhores plantas</h6>
            <p className="description">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <form className="email-form">
                <BiEnvelope style={{opacity:0.5, width:'1em',left:'1em',position:'relative',top:'0.05em'}}/>
                <input className="input-email" type="email" placeholder="Insira seu e-mail" />
                <button type='submit' className="button-submit">Assinar newsletter</button>
            </form>
        </div>

    );

}