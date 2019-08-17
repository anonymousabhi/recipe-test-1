import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
const App = () => {
  const APP_ID = "a5752511";
  const APP_KEY = "1ee2e00f10edacb7b96bf8bdee702f06";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("egg");
  const [a, setA] = useState(0);
  const [b, setB] = useState(4);
  useEffect(() => {
    getRecipes();
    setA(a + 4);
    setB(b + 4);
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${a}&to=${b}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <div class="form-row">
          <div class="col-8">
            <input
              className="form-control"
              type="text"
              value={search}
              onChange={updateSearch}
              placeholder="Enter your Query"
            />
          </div>
          <div class="col">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            link={recipe.recipe.url}
          />
        ))}
      </div>
      <div className="container-fluid">
        <div className="col-sm-12 text-center">
          <button
            className="btn btn-warning"
            title="Submit"
            onClick={getRecipes}
          >
            Previous Page
          </button>
          <button
            className="btn btn-primary"
            title="Submit"
            onClick={getRecipes}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
