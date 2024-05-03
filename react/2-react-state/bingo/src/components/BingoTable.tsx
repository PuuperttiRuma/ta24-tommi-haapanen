import BingoButton from "./BingoButton";
import {useState} from "react";

interface Button {
  row: number;
  col: number;
  text: string;
  isClicked: boolean;
}

// TODO: To a prop
const numberOfBingoRows = 2;

// TODO: to 2 dimensional array to handle mapping better
const populateButtons = (numberOfBingoRows: number) => {
  const buttonArray: Button[] = [];
  for (let row = 0; row < numberOfBingoRows; row++) {
    for (let col = 0; col < numberOfBingoRows; col++) {
      buttonArray.push({
        row: row,
        col: col,
        text: `R${row + 1}C${col + 1}`,
        isClicked: false,
      });
    }
  }
  return buttonArray;
};

const BingoTable = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [buttons, setButtons] = useState<Button[]>(
    populateButtons(numberOfBingoRows)
  );

  const handleClick = () => {
    isButtonClicked ? setIsButtonClicked(false) : setIsButtonClicked(true);
    //change button clicked state
    //check if bingo
  };

  return (
    <div>
      {buttons.map((button) => (
        <BingoButton
          key={button.text}
          buttonText={button.text}
          handleClick={handleClick}
          isButtonClicked={button.isClicked}
        />
      ))}
    </div>
  );
};

export default BingoTable;
