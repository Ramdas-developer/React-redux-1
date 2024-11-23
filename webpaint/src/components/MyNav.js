import React from "react";
import { Link } from "react-router-dom";

const MyNav = () => {
  

  return (
    <nav class=" navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/" style={{fontFamily:"times new roman", fontWeight:"bold"}}>WEBART</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/mylogin">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/register">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/user detail">Details</Link>
        </li>
        {/* <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Action</Link></li>
            <li><Link class="dropdown-item" to="/">Another action</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link class="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <Link class="nav-link active" to="/" tabindex="-1" aria-disabled="false">Disabled</Link>
        </li> */}
      </ul>
      <form class="d-flex">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
  );
};
export default MyNav;
