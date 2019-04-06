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
    return (
      <form id="addBook">
        <div className="field">
          <label>Book name</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre</label>
          <input type="text" />
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(AddBooksQuery)(AddBook);
