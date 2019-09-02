import React, { Component } from "react";
import sprites from "./sprites.json";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import "./App.css";

// helper function to shuffle the cards on each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    sprites,
    score: 0,
    topScore: 0,
    message: "Click any Robot Master to start",
    clickedSprites: []
  };

  clickedImage = id => {
    let clickedSprites = this.state.clickedSprites;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      message: ""
    });

    // if the clicked sprite has an id of the indexed sprites
    if (clickedSprites.indexOf(id) === -1) {
      clickedSprites.push(id);
      console.log(clickedSprites);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 16) {
      // alert player wins
      this.setState({
        message: "You Win!",
        score: 0,
        clickedSprites: []
      });
    } else {
      // alert player loss
      this.setState({
        score: 0,
        clickedSprites: []
      });
      console.log("duplicate");
      this.setState({
        message: "Duplicate clicked, score reset!"
      });
    }

    // set topScore if current score is greater
    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  makeShuffle = () => {
    this.setState({ sprites: shuffle(sprites) });
  };

  render() {
    return (
      <>
        <Navbar
          title="Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div className="row">
          {this.state.sprites.map(sprite => (
            <Card
              id={sprite.id}
              image={sprite.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
