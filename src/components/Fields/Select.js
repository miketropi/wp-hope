import React, { useState, useEffect, Fragment } from "react";
import { Select } from "antd";
import map from 'lodash/map';

const { Option } = Select;

const HopeSelect = (props) => {
  const { options, defaultValue } = props;
  return <Fragment>
    <Select defaultValue={ defaultValue }>
      {
        map(options, (name, value) => {
          return <Option value={ value } key={ value }>{ name }</Option>
        })
      }
    </Select>
  </Fragment>
}

export default HopeSelect;