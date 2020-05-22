import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchReceipe, setLoading } from "../../actions/searchActions";
import Spinner from "../layout/Spinner";

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
      <div style={{ marginTop: "3%" }}>
        <p>About</p>
        <p>
          {receipe.id}
          <br />
          {receipe.title}
        </p>
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
