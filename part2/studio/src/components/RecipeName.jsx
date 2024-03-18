import recipedata from "./recipe.json";

function RecipeName() {
  
  let recipeName = recipedata.map(recipe => {
    return recipe.name
  })

  return (
    <div>
  <h1>{recipeName}</h1>
  </div>
  );
}

export default RecipeName;

//import return the name of the recipe as a level 1 header