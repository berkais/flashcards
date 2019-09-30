import React, { Component } from 'react';
import '../css/card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {front: true};
  }

  flipCard() {
    this.setState(prevState => ({
      side: !prevState.side
    }));
  }

  renderFrontSide() {
    return 'front';
  }

  renderBackSide() {
    return 'back';
  }

  render() {
    return (
      <div className="card" onClick={() => this.flipCard()}>
        {
          this.state.side
          ? this.renderFrontSide()
          : this.renderBackSide()
        }
      </div>
    );
  }
}

export default Card;
