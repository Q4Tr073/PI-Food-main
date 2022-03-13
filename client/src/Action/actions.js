import axios from 'axios';

export function getRecipes() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/recipes',{
            
        });
       
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
        })
    }
}

export function filterRecipesByDiet(payload) {
    return{
        type: 'FILTER_BY_DIET',
        payload
    }
}

export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function filterAlphabetic(payload){
    return {
        type: 'FILTER_BY_ALPHA',
        payload
    }
}

export function orderScore(payload) {
    return {
        type: 'ORDER_BY_SCORE',
        payload
    }
}

export function getRecipeType(){
    return async function (dispatch){
        var recipeTypes = await axios.get('http://localhost:3001/types',{});
        return dispatch({
            type:'GET_RECIPE_TYPE',
            payload: recipeTypes.data,
        })    
    }
}

export function postRecipe(payload) {
    return async function () {
        var json = await axios.post('http://localhost:3001/recipe', payload);

        return json;
    }
}

export function getNameRecipes(name) {
    return async function (dispatch) {
        try{            
            var json = await axios.get('http://localhost:3001/recipes?name=' + name);
            console.log(json)
            if(!json.data.message){
                return dispatch({
                    type: 'GET_NAME_RECIPE',
                    payload: json.data
                })
            }else{
                return dispatch({
                    type: 'GET_ERROR',
                    payload: json.data.message,
                })
            }
            
        }catch (e) {
            console.log(e.response.data)
            return dispatch({
                type: 'GET_ERROR',
                payload: e.response.data,
            })
        }
    }
}

export function getDetail(ID) {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/recipes/' + ID)

            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        }catch (e) {
            console.log(e)
        }
    }
}
export function clearDetail() {
    return {
        type: 'CLEAR_DETAIL',

    }
}