import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import * as BookAPI from "./BooksAPI";

import SearchPage from "./Components/SearchPage/SearchPage";
import { Route } from "react-router-dom";

import BookList from "./Components/BookList/BookList";
class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],

  };
  componentDidMount = async () => {
    const books = await BooksAPI.getAll();

    books.forEach((book) => {
      if (book.shelf === "read")
        this.setState((prev) => ({
          read: [...prev.read, book],
        }));
      if (book.shelf === "currentlyReading")
        this.setState((prev) => ({
          currentlyReading: [...prev.currentlyReading, book],
        }));
      if (book.shelf === "wantToRead")
        this.setState((prev) => ({
          wantToRead: [...prev.wantToRead, book],
        }));
    });
  };
  /**
* @description Update Book
* @constructor
* @param {object} updatedBook - Book Object
* @param {string} shelf - New Shelf selected
*/
  handleUpdate = async (updatedBook, shelf) => {
    await BookAPI.update(updatedBook, shelf);
    const books = await BooksAPI.getAll();

    this.setState({
      currentlyReading: [],
      wantToRead: [],
      read: [],
    });
    books.forEach((book) => {
      if (book.shelf === "read")
        this.setState((prev) => ({
          read: [...prev.read, book],
        }));
      if (book.shelf === "currentlyReading")
        this.setState((prev) => ({
          currentlyReading: [...prev.currentlyReading, book],
        }));
      if (book.shelf === "wantToRead")
        this.setState((prev) => ({
          wantToRead: [...prev.wantToRead, book],
        }));
    });
  };

  render() {
    const { currentlyReading, wantToRead, read } = this.state;
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <BookList
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              handleUpdate={this.handleUpdate}
            />
          )}
        />
        <Route
          path="/search"
          exact
          render={() => <SearchPage handleUpdate={this.handleUpdate} />}
        />
      </div>
    );
  }
}

export default BooksApp;
