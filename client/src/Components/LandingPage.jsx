import React from "react";
import {Link} from 'react-router-dom';
import Style from '../Components/styles/LandingPage.module.css';

export default function LandingPage(){
    return (
        <div className={Style.landing}>
            <h1 className={Style.h1}>Welcome!!!!</h1>
            <Link to='/home/' className={Style.Link}>
                <button className={Style.button}>Delight...</button>
            </Link>
        </div>
    )
}