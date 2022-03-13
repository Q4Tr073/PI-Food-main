import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getRecipeType, postRecipe } from "../Action/actions";
import { useDispatch } from "react-redux";
import Style from '../Components/styles/RecipeCreator.module.css';
import imageCreator from '../Components/imagenes/CrearRecetas.jpg'


export default function RecipeCreator() {
  const dispatch = useDispatch();
  
  const [err, setErr] = useState({});

  function validate(input) {
    let err = {};
    if (!input.name) {
      err.name = "Name must be filled";
    }
    if (!input.resume) {
      err.resume = "Resume must be filled";
    }
    if (!input.score) {
      err.score = "numbers between 1 - 100";
    }
    if (!input.healthylevel) {
      err.healthylevel = "numbers between 1 - 100";
    }
    if (!input.stepbystep) {
      err.stepbystep = "step by step detail";
    }
    if (!input.image) {
      err.image = "enter url address";
    }
    return err;
  }
  

  const [input, setInput] = useState({
    name: '',
    resume: '',
    score: '',
    healthylevel: '',
    stepbystep: '',
    image: '',
    diets: []
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErr(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
        
      });
    }
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErr(validate(input));
    const errorSave = validate(input);
    if(Object.values(errorSave).length !== 0){
      alert('The recipe is not created, fill in the required fields!')
    }else{
      dispatch(postRecipe(input));
    navigate('/home')
    alert("Recipe successfully created");
    setInput({
        name: '',
        resume: '',
        score: '',
        healthylevel: '',
        stepbystep: '',
        image: '',
        diets: []
    });
    }   
  }

  useEffect(() => {
    dispatch(getRecipeType());
  }, [dispatch]);

  return ( 
    <>
    <div className={Style.background}> 
             <img src={imageCreator} className={Style.stretch} alt="" />
        </div>
    
        <div className ={Style.general}> 
        <h1 className={Style.title1} >Create your Recipe</h1>  
          <div className ={Style.form}>              
            
            <form   onSubmit={(e) => handleSubmit(e)}>
              
              <div className={Style.label}>

                <div>
                  <label>Name </label>
                  <input            
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                  <div className={Style.errLabel}>{err.name && <p>{err.name}</p>}</div>                  
                </div>

                <div>
                  <label>Resume </label>
                  <input 
           
                    type="text"
                    value={input.resume}
                    name="resume"
                    onChange={(e) => handleChange(e)}
                  />
                  <div className={Style.errLabel}>{err.resume && <p>{err.resume}</p>}</div>
                </div>

                <div>
                  <label>Score </label>
                  <input  
       
                    type="number"
                    value={input.score}
                    name="score"
                    onChange={(e) => handleChange(e)}
                  />
                  <div className={Style.errLabel}>{err.score && <p>{err.score}</p>}</div>                  
                </div>

                <div>
                  <label>Healthy Level </label>
                  <input 
            
                    type="number"
                    value={input.healthylevel}
                    name="healthylevel"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={Style.errLabel}>{err.healthylevel && <p>{err.healthylevel}</p>}</div>

                <div>
                  <label>Step by step </label>
                  <input 
           
                    type="text"
                    value={input.stepbystep}
                    name="stepbystep"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={Style.errLabel}>{err.stepbystep && <p>{err.stepbystep}</p>}</div>

                <div>
                  <label>Image </label>
                  <input 
            
                    type="text"
                    value={input.image}
                    name="image"
                    onChange={(e) => handleChange(e)}
                  />
                  <div className={Style.errLabel}>{err.image && <p>{err.image}</p>}</div>
                </div>
                
              </div>

              <h1 className={Style.title2}>MARK THE TYPE OF DIET</h1>

              <div className={Style.tDieta}>                

                <label >
                  <input type="checkbox" name="Gluten Free" value="gluten free"
                    onChange={(e) => handleCheck(e)}/>Gluten free
                </label>

                <label>
                  <input type="checkbox" name="Dairy Free" value="dairy free"
                    onChange={(e) => handleCheck(e)}/>Dairy free
                </label>

                <label >
                  <input type="checkbox" name="Lacto Ovo Vegetarian" value="lacto ovo vegetarian"
                    onChange={(e) => handleCheck(e)}/>{" "}Lacto Ovo Vegetariano
                </label>

                <label >
                  <input type="checkbox" name="Vegan" value="vegan"
                    onChange={(e) => handleCheck(e)}/>Vegan
                </label>

                <label>
                  <input type="checkbox" name="Paleolithic" value="paleolithic"
                    onChange={(e) => handleCheck(e)}/>Paleolithic
                </label>

                <label >
                  <input type="checkbox" name="Primal" value="primal"
                  onChange={(e) => handleCheck(e)}/>Primal
                </label>

                <label >
                  <input type="checkbox" name="Pescatarian" value="pescatarian"
                    onChange={(e) => handleCheck(e)}/>Pescatarian
                </label>

                <label>
                  <input type="checkbox" name="Fodmap Friendly" value="fodmap friendly"
                    onChange={(e) => handleCheck(e)}/>Fodmap Friendly
                </label>

                <label >
                  <input type="checkbox" name="Whole 30" value="whole 30"
                    onChange={(e) => handleCheck(e)}/>Whole 30
                </label>
              </div>   
  
              <button className={Style.buttonC} type="submit">
              Create your Recipe!
              </button>

              <NavLink to="/home"  >
                <button  className={Style.buttonV}>Return</button>
              </NavLink>
            </form>
          </div> 
        </div> 
        </>    
  );
}