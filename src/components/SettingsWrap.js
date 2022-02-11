import React from "react";
import {useBackendApp} from "../libs/context/BackendApp";

const {__} = wp.i18n;

const SettingsWrap = () => {
  const {message} = useBackendApp();

  return (
    <div id="hope_settings_wrapper" className="full-screen">
      <div className="hope-settings-header">
        <div className="title-section">
          <h1>{ __('Hope', 'hope') }</h1>
        </div>
        <div className="hope-menu">
          <nav>
            <a className="__active" href="#">{__('General Settings', 'hope')}</a>
            <a href="#">{__('Changelog', 'hope')}</a>
            <a href="#">{__('Support', 'hope')}</a>
          </nav>
        </div>
      </div>

      <div>
        <h1>
          React Page {" "}
        </h1>
        <br />
        <a
          className="button-line"
          href="https://github.com/deityhub"
          target="_blank"
        >
          Know more
        </a>
      </div>
    </div>
  );
};

export default SettingsWrap;