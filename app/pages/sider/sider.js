import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import {Link} from 'react-keeper';
import '../../static/sass/side.scss';
const SubMenu = Menu.SubMenu;


let defaultSelectedKeys = '';
try{
    defaultSelectedKeys = location.href.split('#')[1].split('?')[0].replace('/','');
}
catch(err) {
    defaultSelectedKeys = 'myTrade';
}


const data = [
    {
        bigMenu: {
            title:'管理系统',
            key:'sub1',
        },
        middleMenu: [
                {   title:'服务商城管理',
                    key:'SMALL',
                    smallMenu: [
                        {title:'我的交易', key:'myTrade'},
                        // {title:'我的申请', key:'myApplication'},
                        {title:'我的收款', key:'myPayment'},
                        // {title:'发票管理', key:'myInvoices'},
                        {title:'需求管理', key:'myRequirement'},
                        // {title:'服务产品发布', key:'productRelease'},
                        // {title:'服务产品管理', key:'productManagement'},
                        // {title:'商城设置', key:'mallSettings'},
                        // {title:'推荐设置', key:'recommendSettings'},
                ]},
                // {   title:'服务商服务管理', key:'IPSS',
                //     smallMenu: [
                //         {title:'我的案件审批', key:'myCaseApproval'},
                //         {title:'服务实施管理', key:'serviceImplementationManagement'},
                //         {title:'人事管理', key:'humanManagement'},
                //         {title:'审批管理', key:'approvalManagement'},
                //         {title:'云服务申请', key:'cloudServiceApplication'},
                //         {title:'我的审批', key:'myApproval'},
                //         {title:'基础服务产品管理', key:'basicServiceManagement'},
                // ]},
                // {   title:'服务商客户管理', key:'SCRM',
                //     smallMenu: []}
        ]
    },
    {
        bigMenu: {
            title:'会员中心',
            key:'sub3',
        },
        middleMenu: [
            {   title:'个人中心',
                key:'userCenter',
                smallMenu: [
                    {title:'我的收藏', key:'myFavorite'},
                    {title:'个人信息', key:'personalInfo'},
                    {title:'企业信息', key:'enterpriseInfo'},
                    {title:'权限管理', key:'authorizationManagement'}
                ]}
        ]
    }
];


export default class Sider extends React.Component{

        render(){
        return(
            <div className="fm-side">
                <Menu
                    theme="light"
                    defaultOpenKeys={['sub1','SMALL']}
                    defaultSelectedKeys={[defaultSelectedKeys]}
                    mode="inline">{
                        data.map((item, index) => {
                            if(index>=0){
                                let icon = 'setting';
                                if(item.bigMenu.title == "会员中心"){
                                    icon = 'team';
                                }
                            return <SubMenu key={item.bigMenu.key} title={<span><Icon type={icon} /><span className="fw-bold f-14">{item.bigMenu.title}</span></span>}>{
                                    item.middleMenu.map((o, i) => {
                                        if(i>=0){
                                            return  <SubMenu key={o.key} title={<span className="fw-bold f-14">{o.title}</span>}>{
                                                o.smallMenu.map((b, n) => {
                                                    if(i>=0){
                                                        return  <Menu.Item key={b.key}><Link to={b.key}>{b.title}</Link></Menu.Item>
                                                    }
                                                })
                                            }</SubMenu>
                                        }
                                    })
                                }
                            </SubMenu>
                            }
                        })
                    }
                </Menu>
            </div>
        );
    }
}