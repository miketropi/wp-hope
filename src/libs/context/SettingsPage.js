import React, {createContext, useContext, useState, useEffect} from "react";
import SettingsPane from "../../components/SettingsPane";
import DocumentPane from "../../components/Document";
import UpdatePane from "../../components/UpdatePane";
import * as Api from '../api';

const { __ } = wp.i18n;
const __HOPE = window.__HOPE;
const SettingsPageContext = createContext();

const SettingsPageProvider = ({children}) => {
  const [pages, setPages] = useState([]);
  const [settingNavs, setSettingNavs] = useState([
    {
      _key: 'settings',
      label: __('Settings', 'hope'),
      component: <SettingsPane />,
    },
    {
      _key: 'document',
      label: __('Document', 'hope'),
      component: <DocumentPane />,
    },
    {
      _key: 'update',
      label: __('Update', 'hope'),
      component: <UpdatePane />,
    }
  ]);
  const [defaultNavActive, setDefaultNavActive] = useState(settingNavs[0]._key);
  const [globalOptions, setGlobalOptions] = useState(HOPE_DATA.globalOptions);

  useEffect(() => {
    const getPages = async () => {
      const pages = await Api.getPages();
      setPages(pages);
    }

    getPages();
  }, []);

  const onAddSettingNav = (name, label, component) => {
    let __settingNav = [...settingNavs];
    __settingNav.push({ _key: name, label, component });

    setSettingNavs(__settingNav);
  }

  const value = {
    settingNavs, setSettingNavs,
    defaultNavActive, setDefaultNavActive,
    globalOptions, setGlobalOptions,
    pages, setPages,
  }

  __HOPE.app = value;
  __HOPE.fn.onAddSettingNav = onAddSettingNav;

  return <SettingsPageContext.Provider value={value}>
    {children}
  </SettingsPageContext.Provider>
}

const useSettingsPage = () => {
  return useContext(SettingsPageContext);
}

export {SettingsPageProvider, useSettingsPage};