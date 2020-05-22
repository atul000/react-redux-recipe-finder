import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchReceipe, setLoading } from "../../actions/searchActions";
import Spinner from "../layout/Spinner";

import { Link } from "react-router-dom";

class Receipe extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchReceipe(id);
    this.props.setLoading();
    // console.log(id);
  }
  render() {
    const { loading, receipe } = this.props;

    let receipeInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            {receipe.sourceUrl === "N/A" ? (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_16qEhZIoqj0jNZJJ3wRt7jvKPWwpCjgOKKabMbiMH0W-I6gm&usqp=CAU"
                className="w-100 mb-2"
                alt="not available"
              />
            ) : (
              <img
                src={receipe.image}
                style={{ height: "370px" }}
                className="w-100 mb-2"
                alt="receipe"
              />
            )}
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{receipe.title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Dish Type : </strong>
                {receipe.dishTypes &&
                  receipe.dishTypes.map((i, index) => {
                    return <b>{(index ? ", " : "") + i}</b>;
                  })}
              </li>
              <li className="list-group-item">
                <strong>Diet : </strong>{" "}
                {receipe.diets &&
                  receipe.diets.map((i) => {
                    return <b>{i}</b>;
                  })}
              </li>
              <li className="list-group-item">
                <strong>Cooking Minutes:</strong> {receipe.cookingMinutes}
              </li>
              <li className="list-group-item">
                <strong>Occasions:</strong>{" "}
                {receipe.occasions &&
                  receipe.occasions.map((i) => {
                    return <b>{i}</b>;
                  })}
              </li>
              <li className="list-group-item">
                <strong>Spoonacular Score:</strong> {receipe.spoonacularScore}
              </li>
              <li className="list-group-item">
                <strong>Health Score:</strong> {receipe.healthScore}
              </li>
              <li className="list-group-item">
                <strong>readyInMinutes:</strong> {receipe.readyInMinutes}
              </li>
            </ul>
          </div>
        </div>
        <br />
        <p className="list-group-item" align="justified">
          <b>
            <u>Instructions</u>:{" "}
          </b>
          {receipe.instructions}
        </p>
        <button type="button" class="btn btn-success">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
    );

    let content = loading ? <Spinner /> : receipeInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.receipes.loading,
  receipe: state.receipes.receipe,
});

export default connect(mapStateToProps, { fetchReceipe, setLoading })(Receipe);
