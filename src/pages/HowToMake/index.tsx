import './howToMake.scss'
import imag from '../../assents/products/product-01.png'
import { TbPlant2 } from "react-icons/tb";
import React from 'react';

const steps = [
    "Selecione a planta que deseja",
    "Faça seu pedido",
    "informe o endereço de entrega",
    "Aguarde em casa"
]

export default function HowToMake(){
    return(
        <div className="div-howtomake">
            <img src={imag} className='image-howtomake'/>
            <h1 className="title-howtomake">Como conseguir a minha planta</h1>
            <h6 className="description-howtomake"> em 4 passo é possivel ter a sua em casa</h6>
            <ul className="list-steps">
                {steps.map((item,index)=><React.Fragment key={index}><TbPlant2 className='icon-step'></TbPlant2>< li  className="step-howtomake">{item}</li></React.Fragment>)}
            </ul>


        </div>
        
        

    )
}