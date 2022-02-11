import React from "react";
import ReactDOM from "react-dom";
import SettingsWrap from "./components/SettingsWrap";

/**
 * Style backend
 */
import './scss/backend.scss';

const hopeSettingsElem = document.getElementById("hope_settings");

if(hopeSettingsElem) {
  ReactDOM.render(<SettingsWrap />, hopeSettingsElem);
}
