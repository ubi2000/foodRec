import { useState } from "react";
import Mealcard from "./Mealcard";

const Main = () => {
  const [mealData, setMealData] = useState();
  const [search, setSearch] = useState();
  const [msg,setMsg]=useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const mealAPI = async () => {
    if(search == ""){
      setMsg("Please Enter a Value")
      setMealData("")
    }
    else{
      const getMeal = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await getMeal.json();
      setMealData(jsonData);
      setMsg("")
    
    }
    
  };
 
  return (
    <>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Dish Here"
            onChange={handleSearch}
          />
          <button onClick={mealAPI}>Search</button>
        </div>
        <h4 className="msg">{msg}</h4>
        <div>
          <Mealcard detail={mealData} />
        </div>
      </div>
    </>
  );
};

export default Main;
