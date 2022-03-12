import React, { useState } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
function Front() {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  function First(event) {
    setfirst(event.target.value);
  }
  function Second(event) {
    setsecond(event.target.value);
  }
  return (
    <div>
      <h1>""CHESS GAME""</h1>
      <h1> """When you see a good move look for a better one""" </h1>
      <h1> Game Instructions: </h1>
      <h2>⦿ White Goes First </h2>
      <h2>
        {" "}
        ⦿ Whenever you hover over a piece of chess it shows you suggested moves.{" "}
      </h2>
      <h2>
        {" "}
        ⦿ To move a piece first you have to click on a piece which you want to
        move and then place where you want to place that piece.{" "}
      </h2>
      <h2> ⦿ There is also a button for On/Off suggested moves. </h2>
      {/* <input onChange={First} value={first} placeholder="Player1" /> */}
      <Link to="/chess">
        <button> -START PLAY-</button>
      </Link>
    </div>
  );
}
export default Front;
