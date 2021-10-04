import React from "react";

function MenuItem(props) {
  const { name, icon } = props;

  return (
    <li>
      <a id="core_elsa_btn" href="https://vn.elsaspeak.com/score/">
        <span className="color"></span>
        <span className="icon">
          <img src={{ icon }} />
        </span>
        <span className="title">{name}</span>
      </a>
    </li>
  );
}

export default MenuItem;
