import { useState } from "react";
import "./Card.css";

const Card = ({ data }) => {
  console.log(data.color);
  const [isClicked, setIsClicked] = useState(false);
  // If the card is clicked, render this:
  // return ();

  // If the card isn't cliked, render this:
  return <div>Card goes here</div>;
};
export default Card;
