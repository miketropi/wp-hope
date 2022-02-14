import React, { Fragment } from 'react';
import { Input } from 'antd';
import BlockContent from './BlockContent';
import HopeSelect from './Fields/Select';
import { HopeTabs } from './Tabs';

import map from 'lodash/map';
import isArray from 'lodash/isArray';

const RenderDynamicComponent = (data) => {
  return map(data, (item, _index) => {
    const { _key, tag, attrs, children, deep } = item;
    const _deep = deep ? `[${ deep }].[${ _index }]` : `[${ _index }]`;
    return <DynamicComponent tag={ tag } attrs={ attrs } deep={ _deep } key={ _key }>
      { isArray(children) ? RenderDynamicComponent(children) : children }
    </DynamicComponent>
  })
}

const DynamicComponent = (props) => {
  const { tag, attrs, children, deep } = props;
  const Components = {
    Input,
    Select: HopeSelect,
    BlockContent,
    Tabs: HopeTabs
  };

  const TagName = Components[tag];
  return <Fragment>
    <TagName { ...attrs } deep={ deep }>{ children }</TagName>
  </Fragment>
}

export { RenderDynamicComponent, DynamicComponent };