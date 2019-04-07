import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../queries/queries";

class AddBook extends Component {
  displayAuthor() {
    var data = this.props.data;
    if (data.loading === true) {
      return <option disabled>loading authors...</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
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
            {this.displayAuthor()}
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
