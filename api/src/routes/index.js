const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {showAllRecipes, showDietTypes, showRecipesById, postRecipe} = require ('../controller/controller')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', showAllRecipes);
router.get('/recipes/:id', showRecipesById);
router.get('/types', showDietTypes);
router.post('/recipe', postRecipe);


module.exports = router;
