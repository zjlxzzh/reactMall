import React from 'react';
import { Table, Icon } from 'antd';

const data = [{
    key: '1',
    tractName: '合同_新疆大枣 共 1 件',
    accName: '上海泰顺食品销售有限公司',
    revTypeIdName: '一次性付清',
    payStatus: '已付',
    totalRevenue: '¥60',
    disTypeId: '2017-4-24',
    tractDuration: '30',
    orderCount: '微信',
}];

const columns = [{
    title: '合同名称',
    dataIndex: 'tractName',
    key: 'tractName',
},{
    title: '服务商名称',
    dataIndex: 'accName',
    key: 'accName',
},{
    title: '付款方式',
    dataIndex: 'revTypeIdName',
    key: 'revTypeIdName',
},{
    title: '付款状态',
    dataIndex: 'payStatus',
    key: 'payStatus',
    width:0,
}, {
    title: '应付金额',
    dataIndex: 'totalRevenue',
    key: 'totalRevenue',
},{
    title: '应付日期',
    dataIndex: 'disTypeId',
    key: 'disTypeId',
}, {
    title: '剩余天数',
    dataIndex: 'tractDuration',
    key: 'tractDuration',
},{
    title: '付款渠道',
    dataIndex: 'orderCount',
    key: 'orderCount',
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



export default class myPayment extends React.Component{
    constructor(props){
        super(props);
    this.state = {
        filteredInfo: null,
        sortedInfo: null,
    };
}

    render() {
        return (
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        );
    }

}