// import React from "react";
// import { Link } from "react-router-dom";

// import logo from "../../images/logo.png";

// const Navbar = () => {
//   return (
//     <header className="top-navbar">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <a className="navbar-brand" href="index.html">
// <img style={{ height: "10%", width: "20%" }} src={logo} alt="" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbars-rs-food"
//             aria-controls="navbars-rs-food"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbars-rs-food">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item active">
// <Link className="nav-link" to="/">
//   Home
// </Link>
//               </li>
//               <li className="nav-item">
// <Link className="nav-link" to="/search">
//   Search
// </Link>
//               </li>

//               <li className="nav-item">
// <Link className="nav-link" to="/contact">
//   Contact
// </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img style={{ height: "5%", width: "5%" }} src={logo} alt="" />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/search">
            Search
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
