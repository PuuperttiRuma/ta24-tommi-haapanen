import DisappearingButton from "./DisappearingButton";

const Buttons = () => {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <div>
      {buttons.map((number) => (
        <DisappearingButton key={number} number={number} />
      ))}
    </div>
  );
};

export default Buttons;
