import React from "react";

class Navbar extends React.Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="game-title">Juego</div>
        <div className="name">{name}</div>
        <div className="score">Puntos: {score}</div>
      </div>
    );
  }
}

export default Navbar;
