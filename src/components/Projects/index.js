import "./index.scss";
import bookSearch from "../../assets/images/bookSearch.png";
import graveWorld from "../../assets/images/graveWorld.png";
import petrolPirate from "../../assets/images/petrolPirate.png";
import textEditor from "../../assets/images/textEditor.png";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <Container>
      <Row className="justify-content-evenly ml">
        <Col>
          <Card className="position">
            <Card.Img variant="top" className="cardImg" src={graveWorld} />
            <Card.Body>
              <Card.Title className="title">Grave World</Card.Title>
              <Card.Text>
                Grave World was a group project from my coding bootcamp. It is a
                text adventure game where users can sign in with an email and
                password. create a username and pick 1 of 4 character models
                they would like to play as. Going through grave world users are
                met with a series of trivia questions and riddles to collect
                tokens.
              </Card.Text>
              <Button
                href="https://github.com/Street-Magicians/graveworld"
                target="_blank"
                className="button"
                variant="primary"
              >
                Check out the Repo at Github
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="position">
            <Card.Img variant="top" className="cardImg" src={bookSearch} />
            <Card.Body>
              <Card.Title className="title">
                Book Search MERN Project
              </Card.Title>
              <Card.Text>
                This Project is a full stack MERN project using a database to
                let the user search a book of their choosing. Or search a famous
                series they would like, For instance "Harry Potter" or "Star
                Wars" and the search will find all the closest matches to the
                book you want and will populate the page with images and
                descriptions.
              </Card.Text>
              <Button
                href="https://github.com/smarr2198/BookSearch-MERN"
                target="_blank"
                className="button"
                variant="primary"
              >
                Check out the Repo at Github
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="position">
            <Card.Img variant="top" className="cardImg" src={petrolPirate} />
            <Card.Body>
              <Card.Title className="title">Petrol Pirate</Card.Title>
              <Card.Text>
                This Project was a group project from my coding bootcamp where
                we had users log in and they were able to ping on a map specific
                locations of gas stations and set new low prices for other
                users. It can update current prices of gas stations so users can
                stay up to date on prices for gas. This used an SQL database
                with node.js, JS, and HTML.
              </Card.Text>
              <Button
                href="https://github.com/TeamHBs/petrol-pirate"
                target="_blank"
                className="button"
                variant="primary"
              >
                Check out the Repo at Github
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="position">
            <Card.Img variant="top" className="cardImg" src={textEditor} />
            <Card.Body className="textBox">
              <Card.Title className="title">PWA Text Editor</Card.Title>
              <Card.Text>
                This Project is a fully functional basic text editor aka JATE.
                It saves all text written into users cache. it is also usable
                offline where the user can download it as an actual application
                on their computer. it doesn not need a network connection to use
                the text editor and has full functionality to save to computer
                cache.
              </Card.Text>
              <Button
                href="https://github.com/smarr2198/PWA-TextEditor"
                target="_blank"
                className="button"
                variant="primary"
              >
                Check out the Repo at Github
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
