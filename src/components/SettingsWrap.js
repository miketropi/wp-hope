import React from "react";
import { useSettingsPage } from "../libs/context/SettingsPage";
import { Menu } from "antd";
import { RenderDynamicComponent } from "../components/DynamicComponent";
import styled from "styled-components";
import map from 'lodash/map';

const {__} = wp.i18n;
const SettingNavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .ant-menu-horizontal {
    border-bottom: none;
  }
`;

const SettingNav = styled(Menu)`
  
`

const SettingsWrap = () => {
  const {
    settingTabs, 
    defaultSettingTabsActive, 
    setDefaultSettingTabsActive,
    settings,
  } = useSettingsPage();

  return (
    <div id="hope_settings_wrapper" className="full-screen">
      <div className="hope-settings-header">
        <div className="title-section">
          <h1>{ HOPE_DATA.plgName }</h1>
          <sup>{ __('version', 'hope') } { HOPE_DATA.plgVer }</sup>
        </div>
        <SettingNavWrapper>
          <SettingNav 
            mode="horizontal"
            selectedKeys={ [defaultSettingTabsActive] }
            onClick={ e => {
              setDefaultSettingTabsActive(e.key);
            } }>
            { settingTabs.map(item => {
              return (
                <Menu.Item key={ item._key }>
                  { item.name }
                </Menu.Item>
              )
            }) }
          </SettingNav>
        </SettingNavWrapper>
      </div>

      <div className="hope-settings-body">
        <div className="hope-settings-body--entry-summary">
          {
            RenderDynamicComponent(settings.templateData)
          }

          {
            JSON.stringify(settings)
          }
        </div>
      </div>
    </div>
  );
};

export default SettingsWrap;