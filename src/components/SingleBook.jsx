import { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book, changeSelectedBook }) => {
  const [selectedBook, setSelectedBook] = useState(false);

  const handleClick = () => {
    setSelectedBook(!selectedBook);
    changeSelectedBook(book.asin);
  };

  return (
    <>
      <Card
        onClick={handleClick}
        style={{
          border: selectedBook ? "3px solid red" : "none",
          cursor: "pointer",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
