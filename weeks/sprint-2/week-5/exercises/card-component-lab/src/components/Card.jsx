import { useState } from "react";
import "./Card.css";

const Card = ({ data }) => {
  console.log(data.color);
  const [isClicked, setIsClicked] = useState(false);
  // If the card is clicked, render this:
  // return ();

  // When clicking on the button you should set a state and with the help of
  // conditional rendering show this component instead 👉
  const handleClick = () => {
    setIsClicked(true);
  };

  // If the card isn't cliked, render this:

  return (
    <>
      {isClicked && (
        <div
          style={{ backgroundColor: data.primaryColor }}
          className="card is-clicked"
        >
          <div
            style={{ backgroundColor: data.primaryColor }}
            className="title-part"
          ></div>
          <div
            className="light-part"
            style={{ backgroundColor: data.secondaryColor }}
          ></div>
        </div>
      )}
      {!isClicked && (
        <div style={{ backgroundColor: data.primaryColor }} className="card">
          <div className="header">
            <h2 style={{ color: data.titleColor }} className="title">
              {data.title}
            </h2>
            <span>{data.emoji}</span>
          </div>
          <div
            style={{ backgroundColor: data.secondaryColor }}
            className="light-part"
          >
            <h4 className="subtitle">{data.subtitle}</h4>
            <button
              style={{ backgroundColor: data.buttonColor }}
              onClick={handleClick}
            >
              <p
                style={{ color: data.buttonTextColor }}
                className="button-text"
              >
                {data.buttonText}
              </p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
