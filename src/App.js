import "./App.css";
import Header from "./components/header";
import CardCaja from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header titulo="Galería de imagenes" />

      <div className="row caja-general">
        <div className="col">
          <div className="galeria mt-5">
            <CardCaja
              titulo="Hermanas Paredes"
              descripcion="Rap"
              imagen="hermanas-paredes.jpg"
              nombreBoton="Ver Más"
            />
            <CardCaja
              titulo="Lenguaje Vivo"
              descripcion="Rap"
              imagen="lenguaje-vivo.jpg"
              nombreBoton="Ver Más"
            />
            <CardCaja
              titulo="The End"
              descripcion="Rap"
              imagen="the-end.jpg"
              nombreBoton="Ver Más"
            />
            <CardCaja
              titulo="Apogeo"
              descripcion="Rap"
              imagen="apogeo.jpg"
              nombreBoton="Ver Más"
            />
          </div>
        </div>
        <div className="col">
          <div className="galeria mt-5 mb-5">
            <CardCaja
              titulo="Titan"
              descripcion="Rap"
              imagen="the versoul.jpg"
              nombreBoton="Ver Más"
            />
            <CardCaja
              titulo="The Versoul"
              descripcion="Rap"
              imagen="the versoul.jpg"
              nombreBoton="Ver Más"
            />
            <CardCaja
              titulo="Segundo Cero"
              descripcion="Rap"
              imagen="segundo cero.jpg"
              nombreBoton="Ver Más"
            />
            <CardCaja
              titulo="Pirata"
              descripcion="Rap"
              imagen="pirata.jpg"
              nombreBoton="Ver Más"
            />
          </div>
        </div>
      </div>
      <Footer
        titulo="Todos los derechos reservados"
        nombreBoton="CONTACTO"
        url="https//:www.google.com"
      />
    </>
  );
}

export default App;
