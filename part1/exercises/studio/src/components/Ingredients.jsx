import styles from './Ingredients.module.css';


export default function RecipeIngredients() {
  ingedientsArray = [
    "1 box Crispix cereal, standard size",
    "1 bag semi sweet chocolate chips",
    "1 bag white chocolate chips",
    "1 cup peanut butter, divided",
    "2 sticks butter",
  ];

  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
}
