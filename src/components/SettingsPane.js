import React, { Fragment, useState, useEffect } from 'react';
import { PageHeader, Button, Collapse, Space, Divider, Tabs, Form, Input, Checkbox } from 'antd';

const { __ } = wp.i18n; 
const { TabPane } = Tabs;
const { Panel } = Collapse;

const SettingsPane = (props) => {
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

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
            } }>
              <TabPane tab="General" key="general">
                <Tabs size={ 'size' } defaultActiveKey="general_settings">
                  <TabPane tab="General" key="general_settings">
                    <Form.Item
                      label="Success Page"
                      name="hope_success_page"
                      tooltip={ __('The page donors are sent to after completing their donations. The [hope_receipt] shortcode should be on this page.', 'hope') }
                    >
                      <Input />
                    </Form.Item>
                    
                    <Form.Item
                      label="Failed Donation Page"
                      name="hope_failed_donation_page"
                      tooltip={ __('The page donors are sent to if their donation is cancelled or fails.', 'hope') }
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Donor Dashboard Page"
                      name="hope_donor_dashboard_page"
                      tooltip={ __('This is the page where donors can manage their information, review history and more -- all in one place. The Donor Dashboard block or [hope_donor_dashboard] shortcode should be on this page.', 'hope') }
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Base Country"
                      name="hope_base_country"
                      tooltip={ __('The country your site operates from.', 'hope') }
                    >
                      <Input />
                    </Form.Item>
                  </TabPane>

                  <TabPane tab={ 'Currency' } key="current_settings">
                    hello...!
                  </TabPane>  
                </Tabs>
              </TabPane>
              <TabPane tab="Payment Gateways" key="payment_gateways">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Emails" key="emails">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
        </PageHeader>
      </Form>
    </div>
  </Fragment>
} 

export default SettingsPane;