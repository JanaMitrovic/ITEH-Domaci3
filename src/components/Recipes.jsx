import React from 'react';
import Recipe from './Recipe';
import '../styles/recipes.css';

const Recipes = ({recipes, AddToFavourites}) => {
  return (
    <div className='all-recipes'>
        {recipes.map((recipe) => (
          <Recipe recipe = {recipe} AddToFavourites = {AddToFavourites} favourite = {0}/>
        ))}
    </div>
  )
}

export default Recipes