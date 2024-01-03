import React from "react";

function DeleteRecipe({ index, setRecipes, recipes }) {
  const handleDelete = () => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  };

  return (
    <button onClick={handleDelete} name="delete">
      Delete
    </button>
  );
}

export default DeleteRecipe;
