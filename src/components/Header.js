import React from "react";

export const Header = (props) => {
  return (
    <div className="ml-16">
      <div className="header m-auto rounded-b-lg w-32 h-16 pt-4 bg-primary">
        <h1 className="text-2xl text-white text-center font-bold">
          {props.title}
        </h1>
      </div>
    </div>
  );
};
