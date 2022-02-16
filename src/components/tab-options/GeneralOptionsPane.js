import React, { Fragment, useState, useEffect } from "react";
import { PageHeader, Button, Collapse, Space, Divider, Tabs, Form, Input, Checkbox } from 'antd';

const { __ } = wp.i18n;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const GeneralOptions = () => {
  return <Fragment>
    <Form.Item
      label="Success Page"
      name="hope_success_page"
      tooltip={ __('The page donors are sent to after completing their donations. The [hope_receipt] shortcode should be on this page.', 'hope') }
    >
      <Input />
    </Form.Item>
    
    <Divider />
      
    <Form.Item
      label="Failed Donation Page"
      name="hope_failed_donation_page"
      tooltip={ __('The page donors are sent to if their donation is cancelled or fails.', 'hope') }
    >
      <Input />
    </Form.Item>

    <Divider />

    <Form.Item
      label="Donor Dashboard Page"
      name="hope_donor_dashboard_page"
      tooltip={ __('This is the page where donors can manage their information, review history and more -- all in one place. The Donor Dashboard block or [hope_donor_dashboard] shortcode should be on this page.', 'hope') }
    >
      <Input />
    </Form.Item>

    <Divider />

    <Form.Item
      label="Base Country"
      name="hope_base_country"
      tooltip={ __('The country your site operates from.', 'hope') }
    >
      <Input />
    </Form.Item>
  </Fragment>
}

const CurrencyOptions = () => {
  return <Fragment>

  </Fragment>
}

const GeneralOptionsPane = (props) => {
  const [subTabOptions, setSubTabOptions] = useState([
    {
      _key: 'general-options',
      label: __('General', 'hope'),
      component: <GeneralOptions />
    },
    {
      _key: 'currency-options',
      label: __('Currency', 'hope'),
      component: <CurrencyOptions />
    }
  ]);

  window.__HOPE.fn['setting/general/addTab'] = (name, label, component) => {
    const _subTabOptions = [...subTabOptions];
    _subTabOptions.push({
      _key: name,
      label,
      component
    });
    setSubTabOptions(_subTabOptions);
  }

  return <Fragment>
    <Tabs>
      {
        subTabOptions.map(_tab => {
          const { _key, label, component } = _tab;
          return <TabPane tab={ label } key={ _key }>
            { component }
          </TabPane>
        })
      }
    </Tabs>
  </Fragment>
}

export default GeneralOptionsPane;