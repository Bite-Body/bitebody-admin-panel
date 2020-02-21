import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import headerLogo from '../static/images/BiteBody_Logo_Navbar.png'
import '../static/css/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
      <Link className="navbar-brand" to="/"><img alt="logo" src={headerLogo} height="40px"></img></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end " id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="https://bitebody.xyz" className="nav-link">
                BiteBody.xyz
              </a>
            </li>

          </ul>
        </div>
        
      </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)