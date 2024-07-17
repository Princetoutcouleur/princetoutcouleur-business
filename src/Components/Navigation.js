import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";



const Navigation = () => {
  return (
    <nav id='Navigation' class="navbar navbar-expand-lg bg-body-tertiary text-dark">
  <div class="container">
    <a class="navbar-brand text-dark fw-semibold" href="#"><FaCodepen /> Baba Thiam</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <FaBarsStaggered className='text-dark fs-3'/>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link fw-bold " href="#About">A propos</a>
        <a class="nav-link fw-bold" href="#Portfolio">Portfolio</a>
        <a class="nav-link fw-bold" href="#Services">Services</a>
        <a class="nav-link fw-bold" href="#Contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navigation
