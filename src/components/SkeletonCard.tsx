import { Card } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import "./SkeletonCard.css";

const SkeletonCard = () => {
  return (
      <Card style={{ width: "18rem" }}>
        {/* Skeleton Image */}
        <Placeholder
          as={Card.Img}
          animation="glow"
          variant="top"
          className="skeleton-image"
        />

        {/* Card Body */}
        <Card.Body>
          {/* Title Placeholder */}
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          {/* Text Placeholders */}
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          {/* Button Placeholder */}
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
  );
};

export default SkeletonCard;
