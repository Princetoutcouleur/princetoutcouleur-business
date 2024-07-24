import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";



const Navigation = () => {
  return (
    <nav id='Navigation' class="navbar navbar-expand-lg text-white">
  <div class="container">
    <a class="navbar-brand text-white fw-semibold" href="#">The_Princetoutcouleur Agency</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <FaBarsStaggered className='text-white fs-3'/>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto ">
        <a class="nav-link fw-bold text-white " href="#About">A propos</a>
        <a class="nav-link fw-bold text-white" href="#Portfolio">Portfolio</a>
        <a class="nav-link fw-bold text-white" href="#Services">Services</a>
        <a class="nav-link fw-bold text-white" href="#Contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navigation
