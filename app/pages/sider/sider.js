import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import {Link} from 'react-router';
import '../../static/sass/side.scss';
const SubMenu = Menu.SubMenu;

export default class Sider extends React.Component{
    render(){
        return(
            <div className="fm-side">
                <Menu
                    theme="light"
                    onClick={this.handleClick}
                    defaultOpenKeys={['sub1']}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="setting" /><span className="fw-bold f-14">管理系统</span></span>}>
                        <Menu.Item key="1"><Link to="/myTrade">我的交易</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/myApplication">我的申请</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/myDebit">我的收款</Link></Menu.Item>
                        <Menu.Item key="4">发票管理</Menu.Item>
                        <Menu.Item key="5">需求管理</Menu.Item>
                        <Menu.Item key="6">服务产品发布</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="team" /><span className="fw-bold f-14">个人中心</span></span>}>
                        <Menu.Item key="7">授权交易管理</Menu.Item>
                        <Menu.Item key="8">授权产品管理</Menu.Item>
                        <Menu.Item key="9">我的收藏</Menu.Item>
                        <Menu.Item key="10">个人信息</Menu.Item>
                        <Menu.Item key="11">企业信息</Menu.Item>
                        <Menu.Item key="11">权限管理</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}