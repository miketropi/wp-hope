import React, { Fragment } from "react";
import { useSettingsPage } from "../libs/context/SettingsPage";
import { Menu } from "antd";
import styled from "styled-components";

const { __ } = wp.i18n;
const SettingNavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .ant-menu-horizontal {
    border-bottom: none;
  }

  .ant-menu-item-selected {
    font-weight: bold;
  }

  .ant-menu-horizontal {
    width: 100%;
    justify-content: center;
  }
`;

const SettingNav = styled(Menu)`
  
`

const SettingsWrap = () => {
  const {
    settingNavs,
    defaultNavActive,
    setDefaultNavActive,
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
            selectedKeys={ [defaultNavActive] }
            onClick={ e => {
              setDefaultNavActive(e.key);
            } }>
            { settingNavs.map(item => {
              return (
                <Menu.Item key={ item._key }>
                  { item.label }
                </Menu.Item>
              )
            }) }
          </SettingNav>
        </SettingNavWrapper>
      </div>

      <div className="hope-settings-body">
        <div className="hope-settings-body--entry-summary">
          {
            settingNavs.map(item => {
              const { _key, component } = item;
              return <Fragment key={ `${ _key }_pane` }>
                {
                  defaultNavActive === _key && 
                  component
                }
              </Fragment>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default SettingsWrap;