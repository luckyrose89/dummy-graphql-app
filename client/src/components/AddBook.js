import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../queries/queries";

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
    console.log(this.state);
  };

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
      <form id="addBook" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Book name</label>
          <input type="text" name="name" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Author</label>
          <select name="authorId" onChange={this.handleChange}>
            <option>Select author</option>
            {this.displayAuthor()}
          </select>
        </div>
        <div className="field">
          <label>Genre</label>
          <input type="text" name="genre" onChange={this.handleChange} />
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
