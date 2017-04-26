import React from 'react';
import { Breadcrumb } from 'antd';






export default class MyBreadCrumb extends React.Component{

    render() {
        return (
        <div className="fm-breadCrumb">
            <Breadcrumb separator=">">
                <Breadcrumb.Item className='f-14'>管理系统</Breadcrumb.Item>
                <Breadcrumb.Item className='f-14'>我的交易</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        );
    }

}