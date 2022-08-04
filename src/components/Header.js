import React from "react";

export const Header = (props) => {
  return (
    <div className="header ml-auto rounded-b-lg mr-auto w-32 h-16 pt-4 bg-primary">
      <h1 className="text-2xl text-secondary text-center font-bold">
        {props.title}
      </h1>
    </div>
  );
};
