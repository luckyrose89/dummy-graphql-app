import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import styled from "styled-components";
import {
  getBooksQuery,
  getAuthorsQuery,
  addBookMutation
} from "../queries/queries";

const AddBookForm = styled.form`
  background: #ffffff;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 400px;
  label {
    text-align: right;
    padding: 6px;
  }
`;

const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const InputStyle = styled.input`
  margin: 4px;
  padding: 6px;
`;

const Button = styled.button`
  color: #fff;
  font-size: 2em;
  background: #ad1457;
  border: 0;
  padding: 0 10px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  };

  displayAuthor() {
    var data = this.props.getAuthorsQuery;
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
      <AddBookForm id="addBook" onSubmit={this.handleSubmit}>
        <Field>
          <label>Book name</label>
          <InputStyle type="text" name="name" onChange={this.handleChange} />
        </Field>
        <Field>
          <label>Author</label>
          <InputStyle as="select" name="authorId" onChange={this.handleChange}>
            <option>Select author</option>
            {this.displayAuthor()}
          </InputStyle>
        </Field>
        <Field>
          <label>Genre</label>
          <InputStyle type="text" name="genre" onChange={this.handleChange} />
        </Field>
        <Button>+</Button>
      </AddBookForm>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
