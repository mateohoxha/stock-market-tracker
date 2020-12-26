import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Selector = props => {
    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a company"
            optionFilterProp="children"
            onChange={props.onSelectHandler}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value="FB">Facebook</Option>
            <Option value="AMZN">Amazon</Option>
            <Option value="GOOGL">Google</Option>
            <Option value="TSLA">Tesla</Option>
            <Option value="AAPL">Apple</Option>
            <Option value="MSFT">Microsoft</Option>
        </Select>
    );
};

export default Selector;