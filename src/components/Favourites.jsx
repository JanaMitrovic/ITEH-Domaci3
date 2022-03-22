import React from 'react';
import Recipe from './Recipe';
import '../styles/recipes.css';

const Favourites = ({recipes, RemoveFromFavourites}) => {
  return (
    <div className='all-recipes'>
    {recipes.map((recipe) => (
      <Recipe recipe = {recipe} RemoveFromFavourites = {RemoveFromFavourites} favourite = {1}/>
    ))}
  </div>
  )
}

export default Favourites