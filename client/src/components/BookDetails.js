import React, { Component } from "react";
import { graphql } from "react-apollo";
import styled from "styled-components";
import { getBookQuery } from "../queries/queries";

const Details = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: #88084f;
  padding: 30px;
  overflow: auto;
  box-shadow: -2px -3px 5px rgba(0, 0, 0, 0.3);
  color: #fff;
  box-sizing: border-box;
`;

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>Other Books by author:</p>
          <ul>
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <p>No book selected!</p>
        </div>
      );
    }
  }
  render() {
    return (
      <Details>
        <p>{this.displayBookDetails()}</p>
      </Details>
    );
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
