import React from 'react';
import Selector from './Selector';
import { Switch } from 'antd';

const Toolbar = props => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <div>
                <h3>Select Company<br /></h3>
                <Selector
                    onSelectHandler={props.onSelectHandler}
                />
            </div>

            <div>
                <h3>Theme</h3>
                <Switch
                    unCheckedChildren={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                fontSize: 15,
                                paddingRight: 2,
                            }}
                        >
                            🌞
                            </div>
                    }
                    checkedChildren={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                fontSize: 15,
                                paddingRight: 2,
                            }}
                        >
                            🌑
                            </div>
                    }
                    onChange={props.toggleDarkMode}
                />
            </div>
        </div>
    );
};

export default Toolbar;