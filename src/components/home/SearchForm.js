import React from "react";

import { connect } from "react-redux";
import {
  searchReceipe,
  fetchReceipes,
  setLoading,
} from "../../actions/searchActions";

const SearchForm = (props) => {
  const onChange = (e) => {
    props.searchReceipe(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchReceipes(props.text);
    props.setLoading();
    console.log(props.receipes);
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Search for Receipes...
        </h1>
        <form id="searchForm" onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            onChange={onChange}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.receipes.text,
  receipes: state.receipes.receipes,
});

export default connect(mapStateToProps, {
  searchReceipe,
  fetchReceipes,
  setLoading,
})(SearchForm);
