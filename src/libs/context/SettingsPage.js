import React, {createContext, useContext, useState, useEffect} from "react";
import map from "lodash/map";
import set from "lodash/set";
import find from "lodash/find";

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

  const [settings, setSettings] = useState(find(settingTabs, o => { return o._key == 'settings' }));

  const updateSettingField = (deep, value) => {
    
    const _settings = { ...settings };
    const _settingData = _settings.templateData;

    set(_settingData, deep, value);
    _settings.templateData = _settingData;
    setSettings(_settings);
  }

  const value = {
    /**
     * Tabs 
     */
    settingTabs,
    setSettingTabs,

    /**
     * Default active tab
     */
    defaultSettingTabsActive, 
    setDefaultSettingTabsActive,

    /**
     * Only settings 
     */
    settings, 
    setSettings,
    updateSettingField,
  }

  return <SettingsPageContext.Provider value={value}>
    {children}
  </SettingsPageContext.Provider>
}

const useSettingsPage = () => {
  return useContext(SettingsPageContext);
}

export {SettingsPageProvider, useSettingsPage};