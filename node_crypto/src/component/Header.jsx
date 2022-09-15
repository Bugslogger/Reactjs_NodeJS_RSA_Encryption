import React from "react";

const Header = ({ object }) => {
  return (
    <div className="header">
        <div className="tabs">
      {object.map((value, index) => {
        return (
          <a className="links" key={index} href={value.link}>
            {value.name}
          </a>
        );
      })}
      <div className="links2">By: Sarfaraj Shah</div>
      </div>
      <div className="links1">By: Sarfaraj Shah</div>
    </div>
  );
};

export default Header;
