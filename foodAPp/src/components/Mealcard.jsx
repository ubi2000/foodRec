import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Mealcard = ({ detail  }) => {
  return (
    <div className="meals">
    
      {!detail || !detail.meals
        ? <h2>Enter the meal you wish to search</h2>
        :    detail.meals.map((item) => {
            return (
              <div key={item.idMeal} className="mealImg">
                <img src={item.strMealThumb}></img>
                <p>{item.strMeal}</p>
                <NavLink to={`/${item.idMeal}`}>
                  <button>Show More!</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcard;
