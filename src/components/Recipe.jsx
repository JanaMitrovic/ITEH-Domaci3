import React from 'react';
import '../styles/recipes.css';
import { useState } from 'react';
import Modal from "./Modal";
import Recipes from './Recipes';

const Recipe = ({recipe, AddToFavourites, RemoveFromFavourites, favourite}) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='card'>
        <img src={recipe.img} className='card-img-top'/>
        <div className='card-body'>
            <h3 className='card-title'>{recipe.name}</h3>
            <p className='card-text'> {recipe.ingredients}</p>
            <a className='btn-r' onClick={() => {setOpenModal(true);}}>SEE FULL RECIPE</a>
            {openModal && <Modal recipe = {recipe} closeModal = {setOpenModal}/>}
            <br />
            <br />
            <br />
            {favourite === 0 ? 
             <a className='btn-f' onClick={() => AddToFavourites(recipe.id)}>ADD TO FAVOURITES</a> :
             <a className='btn-f' onClick={() => RemoveFromFavourites(recipe.id)}>REMOVE FROM FAV</a>
            }
           
        </div>
    </div>
  )
}

export default Recipe