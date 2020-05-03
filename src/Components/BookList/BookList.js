import React, { Component } from "react";
import Book from "../Book/Book";
import SearchButton from "../SearchButton/SearchButton";

class BookList extends Component {
  render() {
    const { wantToRead, currentlyReading, read, handleUpdate } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading.map((book) => (
                    <Book
                      handleUpdate={handleUpdate}
                      book={book}
                      key={book.id}
                    />
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToRead.map((book) => (
                    <Book
                      handleUpdate={handleUpdate}
                      book={book}
                      key={book.id}
                    />
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map((book) => (
                    <Book
                      handleUpdate={handleUpdate}
                      book={book}
                      key={book.id}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <SearchButton />
      </div>
    );
  }
}

export default BookList;
