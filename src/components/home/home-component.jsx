import React from 'react';
import { Layout, Divider, Icon, Row, Col, Tabs, Collapse } from 'antd';
import ExpenseForm from './expense-form';
const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;


class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sidebarClass:'sidebar hidebar',};
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar = () => {
    console.log('sidebar', this.state.sidebarClass);
    if(this.state.sidebarClass==='sidebar')
      this.setState({sidebarClass:'sidebar hidebar'})
    else {
      this.setState({sidebarClass:'sidebar'})
      console.log('toggleSidebar', this.state.sidebarClass);

    }
  }
  render () {
    return (
      <Layout>
        <Header>
          <div className="header">
            <span className="hamburger-btn" onClick={this.toggleSidebar}>
              <Icon type="menu-fold" />
            </span>
            Dashboard
          </div>
        </Header>
        <Content>
          <div className={this.state.sidebarClass}>
            <div className="sidebar-item">
              <div className="item-content">
                <Icon type="home" />
                <br/>Home
              </div>
            </div>
            <Divider/>
            <div className="sidebar-item">
              <div className="item-content">
                <Icon type="swap" />
                <br/>Transactions
              </div>
            </div>
            <Divider/>
            <div className="sidebar-item">
              <div className="item-content">
                <Icon type="credit-card" />
                <br/>Accounts
              </div>
            </div>
            <Divider/>
            <div className="sidebar-item">
              <div className="item-content">
                <Icon type="area-chart" />
                <br/>Reports
              </div>
            </div>
            <Divider/>
            <div className="sidebar-item">
              <div className="item-content">
                <Icon type="shopping-cart" />
                <br/>Budget
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-card">
              <Row>
                <Col xs={24} md={12} style={{padding:'1rem 1rem'}}>
                  <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="NET WORTH" key="1">
                      INR
                    </Panel>
                  </Collapse>
                </Col>
                <Col xs={24} md={12} style={{padding:'1rem 1rem'}}>
                  <Collapse bordered={false} defaultActiveKey={['1','2']}>
                    <Panel header="NEW TRANSACTION" key="1">
                      <Tabs type="card">
                        <TabPane tab="Income" key="1">Income</TabPane>
                        <TabPane tab="Transfer" key="2">Transfer</TabPane>
                        <TabPane tab="Expense" key="3"><ExpenseForm {...this.props}/></TabPane>
                      </Tabs>
                    </Panel>
                    <Panel header="TRANSACTIONS" key="2">
                      sdffdg
                    </Panel>
                  </Collapse>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default HomeComponent;