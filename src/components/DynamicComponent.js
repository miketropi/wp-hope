import React, { Fragment } from 'react';
import { Input, Select } from 'antd';
const { Option } = Select;

const DynamicComponent = (props) => {
  const {tag, attrs, children} = props;
  const Components = {
    Input,
    Select,
    SelectOption: Option
  };

  const TagName = Components[tag];
  return <TagName { ...attrs }>{ children }</TagName>
}

export default DynamicComponent;