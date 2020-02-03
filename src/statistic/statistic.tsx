import { Col, Row, Statistic, Select } from 'antd';
import React, { Fragment } from 'react';
import ReactEcharts from 'echarts-for-react';
import './statistic.scss';
const { Option } = Select;

const tableTypes = ['柱状图', '饼状图'];
export function StatisticComponent() {
    return (
        <Fragment>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title='Total' value={10000} />
                </Col>
                <Col span={12}>
                    <Statistic title='Account Balance (CNY)' value={300} precision={2} />
                </Col>
            </Row>
            <div className='echarts-container'>
                <Select className='select' style={{ width: 120 }} defaultValue={tableTypes[0]}>
                    {tableTypes.map((table, i) => <Option key={i}>{table}</Option>)}
                </Select>
                <ReactEcharts option={{
                    tooltip: {},
                    xAxis: {
                        data: ['数码', '游戏', '日常', '餐饮', '其他']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [1, 1, 1, 1, 1, 100]
                    }]
                }} />
            </div>
        </Fragment>
    );
}