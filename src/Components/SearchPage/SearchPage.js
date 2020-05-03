import React, { Component } from "react";

import SearchBar from "./SearchBar/SearchBar";
import SearchResult from "./SearchResult/SearchResult";
import * as BooksAPI from "../../BooksAPI";

class SearchPage extends Component {
  state = {
    result: [],
  };
  /**
* @description Takes Input and show result accordingly
* @constructor
* @param {string} char - characters typed in search field

*/
  changeQuery = async (char) => {
    const res = await BooksAPI.search(char);

    this.setState({
      result: res,
    });
  };
  render() {
    const { result } = this.state;

    return (
      <div className="search-books">
        <SearchBar changeQuery={this.changeQuery} />
        <SearchResult handleUpdate={this.props.handleUpdate} result={result} />
      </div>
    );
  }
}

export default SearchPage;
