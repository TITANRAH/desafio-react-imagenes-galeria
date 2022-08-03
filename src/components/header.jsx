/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          {props.titulo}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Inicio <span className="sr-only"></span>
            </a>
            <a className="nav-item nav-link" href="#">
              Autores
            </a>
            <a className="nav-item nav-link" href="#">
              Reseñas
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
