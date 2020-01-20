import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./MyLayout.css";
import Timer from "../Timer/Timer";
import Uploading from "../Uploading/Uploading";
import { Pagination } from "antd";

import { Link, Route, withRouter } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const MyLayout = props => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">Timer</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/nav2">Upload</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/nav3">Pagination</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>{props.location.pathname}</Breadcrumb.Item>
        </Breadcrumb>

        <div style={{ background: "#fff", padding: 24, minHeight: 780 }}>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Timer />
              </div>
            )}
          />
          <Route
            path="/nav2"
            render={() => (
              <div>
                <Uploading />
              </div>
            )}
          />
          <Route
            path="/nav3"
            render={() => (
              <div>
                <Pagination defaultCurrent={1} total={50} />
              </div>
            )}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default withRouter(MyLayout);
