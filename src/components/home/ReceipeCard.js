import React from "react";
import { Link } from "react-router-dom";

const ReceipeCard = ({ receipe }) => {
  return (
    <div
      className="card col-md-3 mb-5"
      style={{ height: "30rem", padding: "10px" }}
    >
      <img
        className="card-img-top"
        style={{ height: "50%" }}
        src={`https://spoonacular.com/recipeImages/${receipe.image}`}
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">
          <b>{receipe.title}</b>
        </h4>
        <p>Ready in {receipe.readyInMinutes} min</p>
        <p>
          Source:{" "}
          <a href={receipe.sourceUrl} rel="noopener noreferrer" target="_blank">
            Click here
          </a>
        </p>

        <Link to={"/about/" + receipe.id} className="btn btn-primary">
          More info
        </Link>
      </div>
    </div>
  );
};

export default ReceipeCard;
