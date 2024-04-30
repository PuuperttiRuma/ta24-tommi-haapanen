import { StringMappingType } from "typescript";

interface BingoButtonProps {
  isButtonClicked: boolean;
  handleClick: () => void;
  buttonText: string;
}

const BingoButton = ({isButtonClicked, handleClick, buttonText}: BingoButtonProps) => {
  return (
    <>
      <button onClick={handleClick}
      className={
        isButtonClicked
        ? "bingo-button clicked"
        : "bingo-button"
      }>{buttonText}</button>
    </>
  );
};

export default BingoButton;
