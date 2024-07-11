import { useState } from "react";
import { useParams } from "react-router-dom";

const FullRecipe = () => {
  const [singleItem, setSingleItem] = useState();
  const { mealId } = useParams();
  const getSingleRecipe = async () => {
    const getItem = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const jsonData = await getItem.json();
    setSingleItem(jsonData.meals[0]);
  };
  if (singleItem != "") {
    getSingleRecipe();
  }
  return (
    <div>
      { !singleItem ? 
        "Please wait! "
       : 
        <div className="mealInfo">
          <img src={singleItem.strMealThumb} />
          <div className="info">
            <h2>Recipe Details</h2>
            <button>{singleItem.strMeal}</button>
            <h4>Instrutions</h4>
            <p>{singleItem.strInstructions}</p>
          </div>
        </div>
      }
    </div>
  );
};

export default FullRecipe;
