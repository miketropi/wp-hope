import React, {createContext, useContext, useState, useEffect} from "react";
import map from "lodash/map";
import { setIn } from './helpers';

const SettingsPageContext = createContext();

const SettingsPageProvider = ({children}) => {
  const [defaultSettingTabsActive, setDefaultSettingTabsActive] = useState(HOPE_DATA.defaultSettingTabsActive);
  const [settingTabs, setSettingTabs] = useState(map(HOPE_DATA.settingTabs, (item, _key) => {
    const { label, template } = item;
    return {
      _key,
      name: label,
      templateData: template
    }
  }));

  const updateSettingField = (deep, data) => {
    const _settingTabs = { ...settingTabs };
    setIn(deep, data, _settingTabs);
    console.log(_settingTabs);
    setSettingTabs(_settingTabs);
  }

  const value = {
    settingTabs,
    setSettingTabs,
    updateSettingField,
    defaultSettingTabsActive, 
    setDefaultSettingTabsActive,
  }

  return <SettingsPageContext.Provider value={value}>
    {children}
  </SettingsPageContext.Provider>
}

const useSettingsPage = () => {
  return useContext(SettingsPageContext);
}

export {SettingsPageProvider, useSettingsPage};