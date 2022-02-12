import React from "react";
import ReactDOM from "react-dom";
import {BackendAppProvider} from "./libs/context/BackendApp";
import {SettingsPageProvider} from "./libs/context/SettingsPage";
import SettingsWrap from "./components/SettingsWrap";

/**
 * Style backend
 */
import 'antd/dist/antd.css';
import './scss/backend.scss';

const hopeSettingsElem = document.getElementById("hope_settings");

if(hopeSettingsElem) {
  ReactDOM.render(
    <SettingsPageProvider>
      <SettingsWrap />
    </SettingsPageProvider>, hopeSettingsElem);
}
