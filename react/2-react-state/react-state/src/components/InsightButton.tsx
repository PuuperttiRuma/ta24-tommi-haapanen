import { useState } from "react";

const InsightButton = () => {
  const [buttonToggled, setButtonToggled] = useState(false);

  const handleClick = () => {
    buttonToggled ? setButtonToggled(false) : setButtonToggled(true);
    console.log(buttonToggled);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {buttonToggled ? "Hide insight" : "Show insight"}
      </button>
      {buttonToggled && <p>"Fear is the mind killer."</p>}
    </div>
  );
};

export default InsightButton;
