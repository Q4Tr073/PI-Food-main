import {Link} from 'react-router-dom';
import {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getRecipes, filterRecipesByDiet, filterCreated, filterAlphabetic, orderScore } from '../Action/actions';
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import Style from '../Components/styles/Home.module.css';
import imageHome from '../Components/imagenes/fondoCartas.jpg'


export default function Home()  {

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)
    const error = useSelector((state) => state.error) 
    const [order, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch])

   
     


       function handleClick(e){
          e.preventDefault()
          dispatch(getRecipes(e))
        }
        function sortByScore(e) {
            e.preventDefault();
            dispatch(orderScore(e.target.value));
            setCurrentPage(1);
           order? setOrden(false) : setOrden(`Ordenado ${e.target.value}`)
        }

    
        function handleFilterDietTypes(e) {
         dispatch(filterRecipesByDiet(e.target.value))

    
        }
     
        function handleFilterCreated(e) {
          dispatch(filterCreated(e.target.value))
        }
     
    

        function sortByAlpha(e) {
          e.preventDefault();
          dispatch(filterAlphabetic(e.target.value))
          setCurrentPage(1);
          order?  setOrden(false)  :   setOrden(`Ordenado ${e.target.value}`)
        }





    return (
        <>

        <div className={Style.background}> 
             <img src={imageHome} className={Style.stretch} alt="" />
        </div>


        <div className={Style.home}>
            <Link to= '/recipe'><button  className={Style.homeCreate} >Create your recipe</button></Link> 
            <button className={Style.homeButton} onClick={e=>{handleClick(e)}}>
            Reload all recipes
            </button>  
            <SearchBar/>   

           <div>
                <select onChange={e => sortByScore(e) } className={Style.homeselect} >
                     <option value=''>Sort by score</option>
                     <option value='UP'>Upwards</option>
                     <option value='DOWN'>Down</option>
                </select>

                <select onChange={e =>sortByAlpha(e) } className={Style.homeselect}>
                    <option value=''>Alphabetical order</option>
                    <option value='A-Z'>A a Z</option>
                    <option value='Z-A'>Z a A</option> 
                </select> 

                <select onChange={e => handleFilterDietTypes(e)} className={Style.homeselect}>
                    <option value='all'>Type of diet</option>
                    <option value="gluten free">Gluten free</option>
                    <option value="dairy free">Dairy free</option>
                    <option value="lacto ovo vegetarian">Lacto vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="paleolithic">Paliolithic</option>
                    <option value="primal">Primal</option>
                    <option value='pescatarian'>Pescatarian</option>
                    <option value="fodmap friendly">Fodmap Friendly</option>
                    <option value="whole 30">Whole 30</option>
                </select>

          
                <select onChange={e =>handleFilterCreated(e)} className={Style.homeselect} >
                    <option value='all'>All recipes</option>
                    <option value='created'>Created</option>
                    <option value='current'>Current </option>
                </select>


              

                <Paginado
                    recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado}
                />

              

              
          

                <div>
                    <span className={Style.recipes}>
                            
                    
                    { 
                            currentRecipes.map( (el) =>{

                            return (
                       
                                <div className={Style.recipes2} key={el.ID}>
                                    <Link to ={ "/recipes/" + el.ID  }className={Style.cardRead} >                                        
                                        <Card name= {el.name} image= {el.image} diets={el.diets}  key={el.ID} ID={el.ID}/>
                                    </Link>
                                </div>                     
                            )                   
                        })                 
                    } 
                    <h1 className={Style.errSearch}>{error}</h1>
                    </span>
                </div>
            </div>  
        </div>
    </>
    )

   
}