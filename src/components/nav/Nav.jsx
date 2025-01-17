const Nav = () => {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Cortes Urbanos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
