import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavouritesList = () => {
  const favourites = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  );

  if (favourites.length === 0) {
    return <p>No favourite recipes yet.</p>;
  }

  return (
    <div>
      <h2>My Favourites</h2>
      {favourites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavouritesList;

