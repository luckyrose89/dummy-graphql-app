import React, { Component } from "react";
import { graphql } from "react-apollo";
import styled from "styled-components";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 12px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #88084f;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: #88084f;
`;

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayBooks() {
    if (this.props.data.loading === true) {
      return <div>Loading...</div>;
    } else {
      return this.props.data.books.map(book => {
        return (
          <ListItem
            key={book.id}
            onClick={e => {
              this.setState({ selected: book.id });
            }}
          >
            {book.name}
          </ListItem>
        );
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ListStyle>{this.displayBooks()}</ListStyle>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
