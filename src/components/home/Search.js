import React from "react";
import SearchForm from "./SearchForm";
import ReceipeContainer from "./ReceipeContainer";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";

const Search = ({ loading }) => {
  return (
    <div style={{ marginTop: "" }}>
      <SearchForm />
      {loading ? <Spinner /> : <ReceipeContainer />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.receipes.loading,
});

export default connect(mapStateToProps)(Search);
