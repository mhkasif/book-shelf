import React, { Component } from "react";
import Book from "../../Book/Book";

class SearchResult extends Component {
  render() {
    const { result, handleUpdate } = this.props;

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.isArray(result) &&
            result &&
            result.map((res) => (
              <Book handleUpdate={handleUpdate} book={res} key={res.id} />
            ))}
        </ol>
      </div>
    );
  }
}

export default SearchResult;
