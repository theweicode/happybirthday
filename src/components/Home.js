import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Jumbotron, Button, Modal } from "react-bootstrap";
import Popup from "./Popup";
import ModalVideo from "react-modal-video";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Happy Birthday</h1>
          <h1>Hasmine-Bebo</h1>
          <p>
            My wife, you are the sunshine in my life. I love you with every beat
            of my heart. Always and forever. Look at the video I made below.
          </p>
          <p>
            <Button variant="primary" onClick={this.openModal}>
              Launch birthday video!
            </Button>
          </p>
        </Jumbotron>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="yCppuFjggm4"
            onClose={() => this.setState({ isOpen: false })}
          />
        </div>
      </div>
    );
  }
}

export default Home;
