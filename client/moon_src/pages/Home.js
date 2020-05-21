import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import API from "../utils/API";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: "",
    };
  }
  state = {
    books: [],
    query: "",
    message: "Search For A Book To Begin!",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query",
        })
      );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = (id) => {
    const book = this.state.books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron
              title="Google Books Search"
              subtitle="Search for and Save Books of Interest"
            />
          </Col>
          <Col size="md-12">
            <Container title="Book Search" icon="far fa-book">
              <SearchBar
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                query={this.state.query}
              />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Container title="Results">
              {this.state.books.length ? (
                <div>
                  {this.state.books.map((book) => (
                    <BookCard
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </div>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Container>
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }
}

export default Home;
