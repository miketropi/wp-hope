import React, { Fragment, useState, useEffect } from "react";
import { Tabs } from 'antd';

const { __ } = wp.i18n;
const { TabPane } = Tabs;

const GatewayOptions = () => {
  return <Fragment></Fragment>
}

const PayPalOptions = () => {
  return <Fragment></Fragment>
}

const PaymentGatewayOptionsPane = (props) => {
  const [subTabOptions, setSubTabOptions] = useState([
    {
      _key: 'gateway-options',
      label: __('Gateways', 'hope'),
      component: <GatewayOptions />
    },
    {
      _key: 'paypal-options',
      label: __('PayPal', 'hope'),
      component: <PayPalOptions />
    },
    {
      _key: 'stripe-options',
      label: __('Stripe', 'hope'),
      component: ''
    },
    {
      _key: 'offline-donations-options',
      label: __('Offline Donations', 'hope'),
      component: ''
    },
  ]);

  window.__HOPE.fn['setting/paymentGateways/addTab'] = (name, label, component) => {
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

export default PaymentGatewayOptionsPane;