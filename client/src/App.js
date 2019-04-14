import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";

//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import GlobalStyle from "./themes/style";

//Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const Main = styled.main`
  width: 60%;
  height: 100%;
`;

const Heading = styled.h1`
  color: #444;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Main>
          <Heading>Reading List</Heading>
          <BookList />
          <AddBook />
        </Main>
      </ApolloProvider>
    );
  }
}

export default App;
