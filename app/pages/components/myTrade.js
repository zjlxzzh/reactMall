import React from 'react';
import { Table, Icon } from 'antd';

const columns = [{
    title: '服务商名称',
    dataIndex: 'accName',
    key: 'accName',
}, {
    title: '合同名称',
    dataIndex: 'tractName',
    key: 'tractName',
}, {
    title: '合同期限',
    dataIndex: 'tractDuration',
    key: 'tractDuration',
}, {
    title: '合同总额',
    dataIndex: 'totalRevenue',
    key: 'totalRevenue',
},{
    title: '折扣',
    dataIndex: 'disTypeId',
    key: 'disTypeId',
},{
    title: '订单数量',
    dataIndex: 'orderCount',
    key: 'orderCount',
},{
    title: '付款方式',
    dataIndex: 'revTypeIdName',
    key: 'revTypeIdName',
},{
    title: '付款状态',
    dataIndex: 'payStatus',
    key: 'payStatus',
}];

const data = [{
    key: '1',
    accName: 'John Brown',
    tractName: 32,
    tractDuration: 'New York No. 1 Lake Park33',
    totalRevenue: 'N',
    disTypeId: 'N',
    orderCount: 'N',
    revTypeIdName: 'N',
    payStatus: 'N',

}, {
    key: '2',
    accName: 'John Brown',
    tractName: 32,
    tractDuration: 'New York No. 1 Lake Park33',
    totalRevenue: 'N',
    disTypeId: 'N',
    orderCount: 'N',
    revTypeIdName: 'N',
    payStatus: 'N',
}, {
    key: '3',
    accName: 'John Brown',
    tractName: 32,
    tractDuration: 'New York No. 1 Lake Park33',
    totalRevenue: 'N',
    disTypeId: 'N',
    orderCount: 'N',
    revTypeIdName: 'N',
    payStatus: 'N',
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

export default class myTrade extends React.Component{
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