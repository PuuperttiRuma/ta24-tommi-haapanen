import { useState } from "react";

interface DisappearingButtonProps {
  number: number;
}

const DisappearingButton = ({ number }: DisappearingButtonProps) => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    hidden ? setHidden(false) : setHidden(true);    
  };

  return (
    <>
      {!hidden && 
      <button onClick={handleClick}>{number}. Hide</button>
    }
    </>
  );
};

export default DisappearingButton;
