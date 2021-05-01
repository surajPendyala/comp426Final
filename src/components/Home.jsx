import Axios from "axios";
import { useState } from "react";
import "./app.css";
import RecipeTile from "./recipe.js";


function Home() {
  const [state, setState] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = `fcc677fa`;
  const YOUR_APP_KEY = "944f104fc8a802814e8a5f5e426ecd61";

  const url = `https://api.edamam.com/search?q=${state}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async() => {
    let result = await Axios.get(url);
    setrecipes(result.data.hits);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="Home">
      <h1 onClick={getRecipeInfo}>Recipe Warehouse 📦</h1>
      <form className="searchValue" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter Food Item"
          autoComplete="On"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <input className="submit" type="submit" value="Search" />
      </form>

      <div className="recipes">
        {recipes !== null && recipes.map((recipe) => {
            return <RecipeTile recipe={recipe}/>;
          })}
      </div>
    </div>
  );
}

export default Home;