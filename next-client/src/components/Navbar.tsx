import Link from "next/link";

// Styling
import "./Navbar.css";

// Components
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-modern">
      <div className="container">
        <Link className="navbar-brand logo" href="/">
          <img src="images/Logo v2.png" width={50} className="mx-2" />
          PulseWatch
        </Link>

        <div className="search-wrapper mx-auto">
          <Searchbar />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav4"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav4">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link mt-2" href="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
