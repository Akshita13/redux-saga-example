import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchApi_1 } from "./actions/api_1";


class App extends Component {
  render() {
    return (
      <div>
        <h3>Experimenting Saga</h3>
        <h4>click button to fetch from Api 1</h4>
        <button onClick={() => this.props.fetchApi_1()}>Api 1</button>
        <div>
          {this.props.api_1.isFetching && <p>Loading</p>}
          {this.props.api_1.error && <p>{this.props.api_1.error}</p>}
          {this.props.api_1.data ? <p>{this.props.api_1.data}</p> : null}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    api_1: state.apiReducer_1,
  };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchApi_1
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
