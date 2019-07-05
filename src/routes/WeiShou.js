import React, {Component} from 'react';
import {connect} from 'dva';
import { Table, Card,Button} from 'antd';

@connect(({weishoudata})=>({weishoudata}))
export default class WeiShou extends Component {
    // 组件挂载后
    componentDidMount() {

    }

chancun(){
    this.props.dispatch({
          type: 'weishoudata/fetch',
        });
}

    render() {
        const {weishoudata} = this.props;
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'id',
            },{
                title: 'gender',
                dataIndex: 'gender',
            },{
                title: 'id',
                dataIndex: 'id',
            },{
                title: 'age',
                dataIndex: 'age',
            },
        ];
        return (
            <div>
            <Table columns={columns} dataSource={weishoudata.list}/>
            <Button onClick={()=>{this.chancun()}}>324</Button>
            </div>
        );
    }
}
