import React from 'react'
import '../styles/modal.css'

const Modal = ({recipe, closeModal}) => {
  return (
        <div className='modalContainer'>
            <div className='modal'>
                <h1>{recipe.name}</h1>
                <h5>INGREIDENTS</h5>
                <p className='ing'>{recipe.ingredients}</p>
                <h5>PREPARATION</h5>
                <p className='prep'>{recipe.preparation}</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <a className='closeBtn' onClick={() => closeModal(false)}>BACK</a>
            </div>
        </div>
  )
}

export default Modal