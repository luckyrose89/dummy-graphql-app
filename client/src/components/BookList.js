import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

class BookList extends Component {
  displayBooks() {
    if (this.props.data.loading === true) {
      return <div>Loading...</div>;
    } else {
      return this.props.data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>{this.displayBooks()}</ul>
        <BookDetails />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
