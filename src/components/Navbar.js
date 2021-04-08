import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  // setam starea navbarului. ca si default sa nu fie prezent
  //handleToggler -> este o metodata ()
  state = {
    isOpen: false,
  };
  // practic aici jonglam intre navbar deschis si inchis
  handleToggler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggler}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            // practic verificam daca toggler-ul este deschis sau nu si afisam in functie de caz
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
