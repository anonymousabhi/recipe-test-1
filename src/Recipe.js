import React from "react";
import { Card } from "react-bootstrap";
const recipe = ({ title, calories, image, link }) => {
  return (
    // <div className={style.recipe}>
    //     <h1 >{title}</h1>
    //     <img src = {image} alt=""/>
    //     <p>Calories :{calories}</p>
    //     <ol>
    //         {ingredients.map(ingr =>(
    //             <li>{ingr.text}</li>
    //         ))}
    //     </ol>
    // </div>
    <div>
      <Card className="card text-white bg-dark mb-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt="" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Calories:{calories}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href={link} target="_blank">
            View Details
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default recipe;
