/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */

const Footer = (props) => {
  return (
    <>
      <div className="row footer ">
        <div className="col pt-2">
          <p>
            <a href="index.html">{props.url}</a>
          </p>
        </div>
        <div className="col pt-2 mt-1">
          <p>{props.titulo}</p>
        </div>
        <div className="col pt-2">
          <button className="btn btn-light">{props.nombreBoton}</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
