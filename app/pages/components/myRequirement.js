import React from 'react';
import { Table, Icon } from 'antd';

const data = [];

const columns = [{
    title: '需求编号',
    dataIndex: 'productId',
    key: 'productId',
},{
    title: '需求标题',
    dataIndex: 'productName',
    key: 'productName',
},{
    title: '需求分类',
    dataIndex: 'bizCategory1Desc',
    key: 'bizCategory1Desc',
},{
    title: '发布人/部门',
    dataIndex: 'employee',
    key: 'employee',
    width:0,
}, {
    title: '发布时间',
    dataIndex: 'createOn',
    key: 'createOn',
}];
 

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    }),
};





export default class myRequirement extends React.Component{


    componentWillMount(){
        for(let i=1;i<20;i++){
            data.push({
                key: i,
                productId: `R-17033116335071387${i}`,
                productName: 'App开发',
                bizCategory1Desc: '技术类服务',
                employee: '陈旭/技术运营中心',
                createOn: '2017-4-24',
            })
        }
    }


    render() {
        return (
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        );
    }

}