import React, { useState } from "react";
import RecipeData from "./RecipeData";

function RecipeCreate({ setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [url, setUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      {
        name: name,
        cuisine: cuisine,
        photo: url,
        ingredients: ingredients,
        preparation: preparation,
      },
    ]);
    setName("");
    setCuisine("");
    setUrl("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="Name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                id="Cuisine"
                name="cuisine"
                placeholder="Cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
            </td>
            <td>
              <input
                id="Photo"
                name="photo"
                type="text"
                placeholder="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </td>
            <td>
              <textarea
                id="Ingredients"
                name="ingredients"
                placeholder="Ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </td>
            <td>
              <textarea
                id="Preparation"
                name="preparation"
                placeholder="Preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
