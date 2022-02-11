import React from "react";
import ReactDOM from "react-dom";
import {BackendAppProvider} from "./libs/context/BackendApp";
import SettingsWrap from "./components/SettingsWrap";

/**
 * Style backend
 */
import './scss/backend.scss';

const hopeSettingsElem = document.getElementById("hope_settings");

if(hopeSettingsElem) {
  ReactDOM.render(
    <BackendAppProvider>
      <SettingsWrap />
    </BackendAppProvider>, hopeSettingsElem);
}
