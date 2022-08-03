import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardCaja = (props) => {
  return (
    <>
      <Card className="card-component" style={{ width: "18rem" }}>
        <Card.Img
          className="img"
          variant="top"
          src={`./assets/img/${props.imagen}`}
        />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>{props.descripcion}</Card.Text>
          <Button variant="dark">{props.nombreBoton}</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCaja;
