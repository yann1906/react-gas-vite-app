import { Button, Card } from "react-bootstrap";
import "./SkeletonCard.css";

const CardExample = (object: any) => {
  return object.object ? (
    <Card style={{ width: "18rem" }}>
      <Card.Img src="https://dummyimage.com/600x400/000/fff" />
      <Card.Body style={{ color: "black" }}>
        <Card.Title>{object.object.title}</Card.Title>
        <Card.Text>{object.object.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ) : (
    <></>
  );
};

export default CardExample;
