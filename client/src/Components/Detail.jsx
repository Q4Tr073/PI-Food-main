import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetail, clearDetail } from "../Action/actions";
import {NavLink} from 'react-router-dom';
import Style from '../Components/styles/Detail.module.css';
import imageDetail from '../Components/imagenes/detalle1.jpg';



export default function Detail() {
    const dispatch = useDispatch();
       const {id } = useParams();
    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch,(id)]);

    const recipe = useSelector(state => state.detail)
     console.log(recipe)
   
    return (
        <>

        <div className={Style.background}> 
             <img src={imageDetail} className={Style.stretch} alt="" />
        </div>

        <div className={Style.component}>
            <NavLink to='/home'><button className={Style.buttonV} onClick= {()=> dispatch(clearDetail())}>Return</button></NavLink>
            {
                recipe.length > 0 ? 
                    <div>

                        <div className={Style.imgContainer}>
                             <h1  className={Style.title}>{recipe[0].name}</h1>
                                <img  src={recipe[0].image} alt="" width="400px" height="400px" className={Style.img}/>
                        </div>
                        <div className={Style.detailContainer}>
                            <p  className={Style.p}><h5>Resume: {recipe[0].resume.replace(/<[^>]*>?/g, '')}</h5></p>
                            <h5 className={Style.h5}>Diet Types: { 
                            recipe[0].diets && recipe[0].diets.length?
                            recipe[0].diets.map(diet => ` ${diet}. `)
                            :
                            recipe[0].diets ? 
                            "No diet type was specified for this recipe, sorry..."
                            :
                            recipe[0].DietTypes && recipe[0].DietTypes.length?                    
                            recipe[0].DietTypes.map(diet => ` ${diet.name}. `) 
                            :
                            "No diet type was specified for this recipe, sorry..."
                            }</h5>

                            <h5 className={Style.h5} >Score: {recipe[0].score}</h5>
                            <h5  className={Style.h5}>Healthy level: {recipe[0].healthylevel}</h5>
                            <p className={Style.p}>Step by step: {!recipe[0].createdInDB ? recipe[0].stepbystep?.map((step) => step) : recipe[0].stepbystep}</p>
                        </div>
                    </div> : 
                    <div>
                        <p className={Style.li}>Loading...</p>
                    </div>            
            }

        </div>   
     </>        
    )
};