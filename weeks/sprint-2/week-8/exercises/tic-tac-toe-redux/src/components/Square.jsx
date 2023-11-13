import { Player } from "./Player";
import { game } from "../reducers/game";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Square = ({ value, index }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    // TODO send the captureSquare action
    dispatch(game.actions.captureSquare({ index }));
    // let squareArray = useSelector((store) => store.squares);

    // console.log(squareArray);
  };

  return (
    <button
      className={value === null ? "square clickable" : "square"}
      type="button"
      onClick={handleClick}
    >
      <Player value={value} />
    </button>
  );
};
