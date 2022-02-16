import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader, Button, Collapse, Space, Divider, Tabs, Form, Input, Checkbox } from 'antd';
import GeneralOptionsPane from './tab-options/GeneralOptionsPane';
import PaymentGatewayOptionsPane from './tab-options/PaymentGatewayOptionsPane';
import EmailOptionsPane from './tab-options/EmailOptionsPane';
import find from 'lodash/find';

const { __ } = wp.i18n; 
const { TabPane } = Tabs;
const { Panel } = Collapse;

const SettingsPane = (props) => {
  const [tabSettings, setTabSettings] = useState([
    {
      _key: 'general',
      label: __('General', 'hope'),
      component: <GeneralOptionsPane />,
    },
    {
      _key: 'payment_gateways',
      label: __('Payment Gateways', 'hope'),
      component: <PaymentGatewayOptionsPane />,
    },
    {
      _key: 'emails',
      label: __('Emails'),
      component: <EmailOptionsPane />,
    }
  ])

  window.__HOPE.fn['setting/addTab'] = (name, label, component) => {
    const _tabSettings = [...tabSettings];
    _tabSettings.push({
      _key: name,
      label,
      component
    });
    setTabSettings(_tabSettings);
  }

  const [lastRoute, setLastRoute] = useState('General');
  const [form] = Form.useForm();

  const routes = [
    { path: '', breadcrumbName: __('Hope', 'hope') },
    { path: '', breadcrumbName: __('Settings', 'hope') },
    { path: '', breadcrumbName: lastRoute },
  ];

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return <Fragment>
    <div className="site-page-header-ghost-wrapper">
      <Form
        name="basic"
        form={ form }
        layout={ 'vertical' }
        initialValues={ { remember: true } }
        onFinish={ onFinish }
        onFinishFailed={ onFinishFailed }
        autoComplete="off"
      >
        <PageHeader
          ghost={false}
          breadcrumb={{ routes }}
          title={ __('Hope Settings', 'hope') }
          extra={[
            <Button key="button-export">Export</Button>,
            <Button key="button-save" type="primary" htmlType="submit">
              { __('Save', 'hope') }
            </Button>
            ]}
          >
            <Tabs defaultActiveKey="general" type="card" onChange={ (e) => {
              let _tabSettings = [...tabSettings];
              let current = find(tabSettings, o => { return o._key == e });
              setLastRoute(current?.label);
            } }>
              {
                tabSettings.map(_tab => {
                  const { _key, label, component } = _tab;
                  return <TabPane tab={ label } key={ _key }>
                    { component }
                  </TabPane>
                })
              }
            </Tabs>
        </PageHeader>
      </Form>
    </div>
  </Fragment>
} 

export default SettingsPane;