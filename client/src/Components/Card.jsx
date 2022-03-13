import React from "react";
import Style from '../Components/styles/Card.module.css';

export default function Card({name, image, diets, ID}) {
    return (
        <div className={Style.contenedor}>
            <div>
                <div>
                    <h2 className={Style.name1}>{name}</h2>
                    <h5 className={Style.name2}>Diet type: {diets && diets.length ? diets: 'N/A'}</h5>                    
                </div>
                <div>
                    <img src={image} alt="" width="200px" height="200px" className={Style.imgCard} />
                </div>

                
            </div>            
        </div>
    )
}