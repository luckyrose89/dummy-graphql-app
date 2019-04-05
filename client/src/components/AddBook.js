import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const AddBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class AddBook extends Component {
  render() {
    return <div>Form to add new books to db</div>;
  }
}

export default graphql(AddBooksQuery)(AddBook);
