import { useState, useEffect } from "react";
import { Component } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

const SingleBook = ({ book, changeSelectedBook }) => {
  const [selectedBook, setSelectedBook] = useState(false);
  const handleClick = () => {
    setSelectedBook(!selectedBook);
    changeSelectedBook(book.asin);
  };
  // state = {
  //   selected: false,
  // }

  return (
    <>
      <Card
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={() => handleClick}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
