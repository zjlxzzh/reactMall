import React from 'react';
import { Breadcrumb } from 'antd';


//定义参数
let defaultBreadcrumb, urlParameters ;


function returnDefaultBreadcrumb(){
    try{
        urlParameters = location.href.split('#')[1].split('?')[0].replace('/','');
        switch (urlParameters){
            case 'myTrade':
                defaultBreadcrumb = '我的交易';
                break;
            case 'myPayment':
                defaultBreadcrumb = '我的收款';
                break;
            case 'myRequirement':
                defaultBreadcrumb = '需求管理';
                break;
        }
        console.log(defaultBreadcrumb)
    }
    catch(err) {
        defaultBreadcrumb = '我的交易';
    }
    return defaultBreadcrumb;
}


export default class MyBreadCrumb extends React.Component{

    componentWillMount(){
        returnDefaultBreadcrumb();
    }

    componentWillUpdate(){
        returnDefaultBreadcrumb();
    }

    render() {
        return (
        <div className="fm-breadCrumb">
            <Breadcrumb separator=">">
                <Breadcrumb.Item className='f-14'>管理系统</Breadcrumb.Item>
                <Breadcrumb.Item className='f-14'>{defaultBreadcrumb}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        );
    }

}