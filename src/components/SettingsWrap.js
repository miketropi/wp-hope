import React from "react";

const {__} = wp.i18n;

const SettingsWrap = () => {
  return (
    <div id="hope_settings_wrapper" className="full-screen">
      <div className="hope-settings-header">
        <div className="title-section">
          <h1>{ __('Hope Settings', 'hope') }</h1>
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