import React, { Component } from "react";
import * as BookAPI from "../../BooksAPI";
export default class Book extends Component {
  /**
* @description Selecting Shelf
* @constructor
* @param {string} e - Event targeted on selecting Option
*/
  handleChange = (e) => {
    this.props.handleUpdate(this.props.book, e.target.value);
  };
  render() {
    const {
      book: { title, imageLinks, authors, shelf },
    } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            {imageLinks && (
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${imageLinks.thumbnail})`,
                }}
              />
            )}
            <div className="book-shelf-changer">
              <select onChange={this.handleChange}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option
                  selected={shelf === "currentlyReading"}
                  value="currentlyReading"
                >
                  Currently Reading
                </option>
                <option selected={shelf === "wantToRead"} value="wantToRead">
                  Want to Read
                </option>
                <option selected={shelf === "read"} value="read">
                  Read
                </option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          {authors &&
            authors.map((author, i) => (
              <div key={i} className="book-authors">
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}
