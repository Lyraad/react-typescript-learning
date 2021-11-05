import React from "react";

const Button = (props: any) => {
  const { buttonText, testFunc } = props;
  return (
    <div>
      <button onClick={() => testFunc("Pepis")}>{buttonText}</button>
    </div>
  );
};

export default Button;
