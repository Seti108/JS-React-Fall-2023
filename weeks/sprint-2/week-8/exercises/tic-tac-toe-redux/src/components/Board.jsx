import { Square } from "./Square";
import { useSelector } from "react-redux";
import { game } from "../reducers/game";

export const Board = () => {
  // TODO - use the 'squares' state from the game reducer
  const squares = useSelector((store) => store.game.squares);

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  );
};
