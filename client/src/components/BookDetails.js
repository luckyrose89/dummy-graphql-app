import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  render() {
    return (
      <div id="details">
        <p id="book-details" />
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails);
