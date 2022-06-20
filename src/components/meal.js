import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Meal = () => {
  const [mealName, setMealName] = useState(""),
    [mealAvatar, setMealAvatar] = useState(""),
    [mealIngredients, setMealIngredients] = useState(new Array()),
    [mealInstructions, setMealInstructions] = useState("");

  useEffect(() => {
    const fetchMeal = async () => {
      const mealData = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        ),
        mealDataJson = await mealData.json(),
        meal = mealDataJson.meals[0];

      let ingredients = [];
      for (let i = 0; i < 21; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push({
            ingredient: meal[`strIngredient${i}`],
            measurement: meal[`strMeasure${i}`]
          });
        }
      }
      setMealName(meal.strMeal);
      setMealAvatar(meal.strMealThumb);
      setMealIngredients(ingredients);
      setMealInstructions(meal.strInstructions);
    };
    fetchMeal();
  }, []);

  return (
    <>
      <nav className="center">
        <Link to="/" className="center">
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back to home</span>
        </Link>
      </nav>
      <div className="grid-container">
        <div className="avatar center flex-column grid-area">
          <h3>{mealName}</h3>
          <img className="meal__image" src={mealAvatar} alt="Meal avatar"></img>
        </div>
        <div className="ingredients grid-area">
          <span>Ingredients</span>
          <ul className="ingredients__list">
            {mealIngredients.map((ingredient, index) => (
              <li
                key={index}
              >{`${ingredient.ingredient} - ${ingredient.measurement}`}</li>
            ))}
          </ul>
        </div>
        <div className="procedure grid-area">
          <span>Instructions</span>

          <div className="procedure__list">{mealInstructions}</div>
        </div>
      </div>
    </>
  );
};
export default Meal;
