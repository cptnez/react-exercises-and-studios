import { useState } from "react";
import "./App.css";
import RecipeDescription from "./components/Description";
import RecipeIngredients from "./components/Ingredients";
import RecipeAuthor from "./components/Description";
import RecipePhoto from "./components/Photos";


function App() {
  return (
    <>
<div className="App">
   <div>
      <RecipePhoto />
      <div>
         <RecipeDescription />
         {/* <RecipeIngredients /> */}
      </div>
   </div>
 </div>
    </>
  );
}

export default App;