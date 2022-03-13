import React from "react";
import Style from '../Components/styles/Paginado.module.css';

export default function Paginado({recipesPerPage, allRecipes, paginado}){
    const pageNumbers = [];
    for (let i=0; i<Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i+1);
    }
    return (
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number=> (
                    <button className={Style.li} key={number} onClick={()=>paginado(number)}>
                        {number}
                    </button>
                ))}                
            </ul>
        </nav>
    )
}