import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

export default function Button({
  children,
  type = "button",
  color = "is-primary",
  size = "",
  outlined = false,
  fullwidth = false,
  onClick,
}) {
  const classNames = [
    "button",
    color,
    size,
    outlined ? "is-outlined" : "",
    fullwidth ? "is-fullwidth" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  color: PropTypes.string,
  size: PropTypes.oneOf(["is-small", "is-medium", "is-large", ""]),
  outlined: PropTypes.bool,
  fullwidth: PropTypes.bool,
  onClick: PropTypes.func,
};
