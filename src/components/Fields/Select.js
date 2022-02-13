import React, { useState, useEffect, Fragment } from "react";
import { useSettingsPage } from "../../libs/context/SettingsPage";
import { Select } from "antd";
import map from 'lodash/map';

const { Option } = Select;

const HopeSelect = (props) => {
  const { options, defaultValue, deep } = props;
  const { updateSettingField } = useSettingsPage();

  return <Fragment>
    { deep }
    <Select defaultValue={ defaultValue } onChange={ value => {
      updateSettingField(`${ deep }.attrs.defaultValue`, value);
    } }>
      {
        map(options, (name, value) => {
          return <Option value={ value } key={ value }>{ name }</Option>
        })
      }
    </Select>
  </Fragment>
}

export default HopeSelect;