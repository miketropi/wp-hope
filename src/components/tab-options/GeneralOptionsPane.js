import React, { Fragment, useState, useEffect } from "react";
import { PageHeader, Button, Collapse, Space, Divider, Tabs, Form, Input, Checkbox, Select } from 'antd';
import { useSettingsPage } from '../../libs/context/SettingsPage';
import map from 'lodash/map';

const Country = require('../../libs/country-by-abbreviation.json');
const Currency = require('../../libs/common-currency.json');

const { __ } = wp.i18n;
const { TabPane } = Tabs;
const { Panel } = Collapse; 
const { Option } = Select;

const GeneralOptions = () => {
  const { pages } = useSettingsPage();
  
  return <Fragment>
    {/* { JSON.stringify(pages) } */}
    <Form.Item
      label="Success Page"
      name="hope_success_page"
      extra={ __('The page donors are sent to after completing their donations. The [hope_receipt] shortcode should be on this page.', 'hope') }
    >
      <Select 
        showSearch
        placeholder={ __('Select success page', 'hope') }
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        {
          (pages != null) &&
          pages.map(page => {
            const title = `${page.title.rendered} (#${ page.id })`;
            return <Option value={ page.id } key={ page.id }>{ title }</Option>
          })
        }
      </Select>
    </Form.Item>
      
    <Form.Item
      label="Failed Donation Page"
      name="hope_failed_donation_page"
      extra={ __('The page donors are sent to if their donation is cancelled or fails.', 'hope') }
    >
      <Select 
        showSearch
        placeholder={ __('Select failed donation page', 'hope') }
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        {
          (pages != null) &&
          pages.map(page => {
            const title = `${page.title.rendered} (#${ page.id })`;
            return <Option value={ page.id } key={ page.id }>{ title }</Option>
          })
        }
      </Select>
    </Form.Item>

    <Form.Item
      label="Donor Dashboard Page"
      name="hope_donor_dashboard_page"
      extra={ __('This is the page where donors can manage their information, review history and more -- all in one place. The Donor Dashboard block or [hope_donor_dashboard] shortcode should be on this page.', 'hope') }
    >
      <Select 
        showSearch
        placeholder={ __('Select donor dashboard page', 'hope') }
        filterOption={(input, option) => {
          return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }}> 
        {
          (pages != null) &&
          pages.map(page => {
            const title = `${page.title.rendered} (#${ page.id })`;
            return <Option value={ page.id } key={ page.id }>{ title }</Option>
          })
        }
      </Select>
    </Form.Item>

    <Form.Item
      label="Base Country"
      name="hope_base_country"
      extra={ __('The country your site operates from.', 'hope') }
    >
      <Select
        showSearch
        placeholder={ __('Select country', 'hope') }
        filterOption={(input, option) => {
          return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }}>
        {
          (Country != null) && 
          Country.map(c => {
            let title = `${ c.country } (${ c.abbreviation })`;
            return <Option 
              value={ c.abbreviation } 
              key={ c.abbreviation }>{ title }</Option>
          })
        }
      </Select>
    </Form.Item>
  </Fragment>
}

const CurrencyOptions = () => {
  return <Fragment>
    <Form.Item
      label={ __('Currency', 'hope') }
      name="hope_currency"
      extra={ __('The donation currency. Note that some payment gateways have currency restrictions.', 'hope') }
    >
      <Select
        showSearch
        placeholder={ __('Select currency', 'hope') }
        filterOption={(input, option) => {
          return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }}>
        {
          Currency != null &&
          map(Currency, (c, name) => {
            let title = `${ c.name } (${ c.symbol })`
            return <Option value={ name } key={ name }>{ title }</Option>
          })
        }
      </Select>
    </Form.Item>

    <Form.Item
      label={ __('Currency Position', 'hope') }
      name={ 'hope_currency_position' }
      extra={ __('The position of the currency symbol.', 'hope') }
    >
      <Select>
        <Option value={ 'before' }>{ __('Before - $10', 'hope') }</Option>
        <Option value={ 'after' }>{ __('After - 10$', 'hope') }</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label={ __('Thousands Separator', 'hope') }
      name={ 'hope_currency_thousands_separator' }
      extra={ __('The symbol (typically , or .) to separate thousands.', 'hope') }
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={ __('Decimal Separator', 'hope') }
      name={ 'hope_currency_decimal_separator' }
      extra={ __('The symbol (usually , or .) to separate decimal points.', 'hope') }
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={ __('Number of Decimals', 'hope') }
      name={ 'hope_currency_number_of_decimals' }
      extra={ __('The number of decimal points displayed in amounts.', 'hope') }
    >
      <Input />
    </Form.Item>
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