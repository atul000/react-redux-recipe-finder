import React from "react";

const SearchForm = () => {
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Search for a receipe...
        </h1>
        <form id="searchForm">
          <input
            type="text"
            className="form-control"
            name="searchText"
            // onChange={onChange}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
