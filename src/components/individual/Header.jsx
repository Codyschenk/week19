import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <Fragment>
      <header class="w-full h-1/6 bg-green-300 text-center">
        <h1
          class="
      text-5xl text-white text-center
      flex
      align-middle
      justify-center
      pt-5
      pb-5
    "
        >
          Employee directory
        </h1>
      </header>
    </Fragment>
  );
}

Header.propTypes = {};

export default Header;
