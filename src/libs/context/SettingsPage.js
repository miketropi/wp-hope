import React, {createContext, useContext, useState, useEffect} from "react";
import map from "lodash/map";

const SettingsPageContext = createContext();

const SettingsPageProvider = ({children}) => {
  const [defaultSettingTabsActive, setDefaultSettingTabsActive] = useState(HOPE_DATA.defaultSettingTabsActive) 

  const value = {
    settingTabs: map(HOPE_DATA.settingTabs, (item, _key) => {
      const { label, template } = item;
      return {
        _key,
        name: label,
        templateData: template
      }
    }),
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