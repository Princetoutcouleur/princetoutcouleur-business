import React from 'react'

const CardStep = (props) => {
  return (
    <div id="CardStep" className="mb-3">
      <div className="card border text-white bg-transparent rounded-4 p-2">
        <div className="card-body">
          <div className='d-flex justify-content-center'>
          <div className="mb-3">
           <h1 className='fs-2 yellow-text'>{props.num}</h1>
          </div>
          </div>
          <div>
            <h5 className="card-title text-capitalize text-center fs-4 yellow-text mb-3">{props.title}</h5>
          </div>
          <p className="card-text text-center">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardStep
