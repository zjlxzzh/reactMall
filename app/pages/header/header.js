import React from 'react';
import {Row,Col,Menu, Icon, Switch} from 'antd';
import '../../static/sass/header.scss';


export default class Header extends React.Component{

    render(){
        return(
            <div className="fm-header-wrap">
                <Row>
                    <Col span={24}>
                        {this.getLogo()}
                        {this.getCompanyName()}
                        {this.getNav()}
                        <div className="header-right pull-right">
                            {this.getUserImg()}
                            {this.getUserName()}
                            {this.getLogout()}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    getJson(){
        var userInfo = {
            companyName:'上海圣华副食品有限公司',
            companyImg:'../../app/static/images/avatar.jpg',
            userName:'新月',
            userImg:''
        }
        return userInfo;
    }

    //获取logo
    getLogo(){
        return (
            <div className="header-logo pull-left mt20">
                <img className="border-radius-base" src={this.getJson().companyImg} />
            </div>
        );
    }

    //获取公司名称
    getCompanyName(){
        return (
            <div className="pull-left white f-14 ml10">
                {this.getJson().companyName}
            </div>
        );
    }


    //获取nav
    getNav(){
        return(
            <div className="header-nav pull-left">
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={['center']}
                    mode="horizontal"
                    style={{ width: 400,height:70}}
                >
                    <Menu.Item key="cloud" className="f-14 white">
                        <Icon type="cloud-o" />企业云服务
                    </Menu.Item>
                    <Menu.Item key="mall" className="f-14 white">
                        <Icon type="shopping-cart" />服务商城
                    </Menu.Item>
                    <Menu.Item key="center" className="f-14 white">
                        <Icon type="solution" />用户中心
                    </Menu.Item>
                </Menu>
            </div>
        );
    }

    //获取头像
    getUserImg(){
        return(
            <div className="header-userImg pull-left mt20">
                <span className="icon-head3"></span>
            </div>
        );
    }

    //获取用户名
     getUserName(){
        return(
            <div className="header-userName pull-left f-14 white ml10">
                {this.getJson().userName}
            </div>
        );
     }

    //退出
    getLogout(){
         return(
             <a href="javascript;" className="pull-right f-14 gray" title="退出"><Icon type="logout" /></a>
         );
    }

















}