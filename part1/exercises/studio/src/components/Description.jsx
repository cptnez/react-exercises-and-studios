import styles from "./Description.module.css";
import React from "react";

export default function RecipeAuthor() {
  let authorLink =
    "https://www.pauladeen.com/get-lucky-with-a-st-patricks-day-puppy-chow-recipe/";
  let authorPhoto =
    "https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/06/22/1371956179000-deen-1306230918_16_9.jpg?width=2832&height=1596&fit=crop&format=pjpg&auto=webp";
  let authorName = "Paula Deen";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Image of Paula Deen"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Blog name</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
(    <div>
      <div>
        <h1>St. Patties Tasty Food</h1>
        <p>It's gonna be good...</p>
      </div>
      <RecipeAuthor />
    </div>);
  }
}


