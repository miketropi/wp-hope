import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd';
import { RenderDynamicComponent } from "./DynamicComponent";

const { TabPane } = Tabs;

const HopeTabs = (props) => { 
  const { items, type } = props;

  return <Tabs type={ type } >
    { items.map( o => { 
      const { _key, attrs, children } = o; 
      return <TabPane { ...attrs } key={ _key }>
        { 
          (typeof children === 'string') ? children : RenderDynamicComponent(children)
        }
      </TabPane>
    } ) }
  </Tabs>
}

export { HopeTabs }; 