import recipeData from './recipe.json';
import styling from './styling.css';

function AuthorInfo() {

const recipeAuthor = recipeData.map(recipe => {
  return <div key={recipe.name}>{recipe.author}</div>
})

const recipeAuthorImage = recipeData.map(recipe => {
  return <div key={recipe.name}>
    <img src={recipe.authorImage} alt={recipeAuthor} className='authorImage'/>
    </div>
})

const recipeAuthorUrl = recipeData.map(recipe => {
  return <div key={recipe.name}>
    <a href={recipe.website}>Check the website out here!</a>
  </div>
})


   return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeAuthorUrl}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 