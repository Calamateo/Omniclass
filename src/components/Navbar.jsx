import React from 'react'

function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-black bg-black">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/#"><img width={"100px"} src="https://consulting.construction/wp-content/uploads/elementor/thumbs/Consulting-Construction_Soluciones-integrales-para-la-industria-AEC_logoW-po2z60znnm1ypcpd6tsb9443x322o3bd1tlfnfbtb0.png" alt="" /></a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/#">Home</a>
          </li>
        </ul>
        <p className="text-white h5 pe-2">Modo Nocturno</p>
        <form className="d-flex form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export {Navbar}