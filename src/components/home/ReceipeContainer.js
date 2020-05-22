import React from "react";
import { connect } from "react-redux";

import ReceipeCard from "./ReceipeCard";

const MovieContainer = ({ receipes }) => {
  let content = "";

  content =
    receipes && receipes.length > 0
      ? receipes.map((receipe, index) => (
          <ReceipeCard key={index} receipe={receipe} />
        ))
      : null;

  return <div className="row">{content}</div>;
};

const mapStateToProps = (state) => ({
  receipes: state.receipes.receipes,
});

export default connect(mapStateToProps)(MovieContainer);
