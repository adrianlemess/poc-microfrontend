import React, { useState } from "react";
import PropTypes from "prop-types";
import { compose, withProps, withState } from "proppy";
import { attach } from "proppy-react";

import Logo from "../Logo";
import NavItem from "../NavItem";

import "./styles.scss";

const withHeaderState = compose(
  withState("active", "setActive", 1),
  withProps({ items: [0, 1, 2, 3] })
);

const Header = ({ items, active, setActive, counter }) => {
  const [ counterState, setCounterState ] = useState({
    counter: 0
  })

  window.addEventListener('increaseCounter', (event) => {
    setCounterState({ counter: counterState.counter + event.detail });
  });

  window.addEventListener('reset', (event) => {
    setCounterState({ counter: 0 });
  });

  return (
    <div className="header">
      <Logo />
      <h2 className="title"> App em React: counter: { counterState.counter } </h2>
      {items.map((item, index) => (
        <NavItem
          key={index}
          index={index}
          active={index === active}
          onClick={setActive}
        />
      ))}
    </div>
  );
};

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
};

export default attach(withHeaderState)(Header);
