import React from "react";

const Score = (game) => {
    return (
        <div style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}> Score: {game.score}</div>
    );
}
export default Score;