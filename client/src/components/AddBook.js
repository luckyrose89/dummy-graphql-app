import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  displayAuthor() {
    var data = this.props.data();
    if (data.loading === true) {
      return <div>loading authors...</div>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author}
          </option>
        );
      });
    }
  }
  render() {
    return (
      <form id="addBook">
        <div className="field">
          <label>Book name</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author</label>
          <select>
            <option>Select author</option>
            {this.displayAuthor}
          </select>
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

export default graphql(getAuthorsQuery)(AddBook);
