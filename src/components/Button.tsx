import React from "react";

interface props {
  buttonText: string;
  testFunc(input: string): string;
}

const Button = ({ buttonText, testFunc }: props) => {
  return (
    <div>
      <button onClick={() => console.log(testFunc("TEST2"))}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
