import { Card } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import "./SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Placeholder
        as={Card.Img}
        animation="glow"
        variant="top"
        className="skeleton-image"
      />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  );
};

export default SkeletonCard;
