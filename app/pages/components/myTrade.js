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
    sorter: (a, b) => a.totalRevenue.replace('¥','') - b.totalRevenue.replace('¥',''),
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

const data = [];

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

function onChange(pagination , sorter) {
    console.log('params', pagination, sorter);
}

export default class myTrade extends React.Component{
    constructor(props){
        super(props);
    this.state = {
        filteredInfo: null,
        sortedInfo: null,
    };
}


    componentWillMount(){
        for(let i=1;i<30;i++){
            data.push({
                key: i,
                accName: '上海津全贸易有限公司',
                tractName: `合同_柚子共${i}件`,
                tractDuration: 32,
                totalRevenue: `¥${80*i}`,
                disTypeId: 0,
                orderCount: 1,
                revTypeIdName: '分期',
                payStatus: '未付款',
            })
        }
}


    render() {
        return (
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange} />
        );
    }

}