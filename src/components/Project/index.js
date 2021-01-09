import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import "./style.css";

export default function Project(props) {
    return (
        <div className="parent">
        <Card className="card">
          <Card.Img variant="top" src={props.image} />
          <Card.Body className="card-body-content">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <div className="card-button">
              <Link to={props.url}>
                  <Button variant="primary">Visit Project</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

