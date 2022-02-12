import React, { Fragment } from 'react';
import { Input, Tabs } from 'antd';
import BlockContent from './BlockContent';
import HopeSelect from './Fields/Select';
const { TabPane } = Tabs;

import map from 'lodash/map';
import isArray from 'lodash/isArray';

const RenderDynamicComponent = (data) => {
  console.log(data);
  return map(data, (item, _index) => {
    const { _key, tag, attrs, children } = item;
    return <DynamicComponent tag={ tag } attrs={ attrs } key={ _key }>
      { isArray(children) ? RenderDynamicComponent(children) : children }
    </DynamicComponent>
  })
}

const DynamicComponent = (props) => {
  const { tag, attrs, children } = props;
  const Components = {
    Input,
    Select: HopeSelect,
    BlockContent,
    Tabs,
    TabPane,
  };

  const TagName = Components[tag];
  return <Fragment>
    <TagName { ...attrs }>{ children }</TagName>
  </Fragment>
}

export { RenderDynamicComponent, DynamicComponent };