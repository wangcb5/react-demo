import React from 'react'
import { Menu, Spin } from 'antd';
const { SubMenu } = Menu;
import { LoadingOutlined } from '@ant-design/icons';
import {observer, inject} from 'mobx-react'
@inject('store') @observer
class Sider extends React.Component {
    state = {
        theme: 'dark',
        current: '1',
    };


    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        const menuList = this.props.store.menuStore.menuList.map((item, index) => {
            let children1 = [];
            let children2 = [];
            if (item.children && item.children instanceof Array && item.children.length > 0) {
                children1 = item.children.map((items, indexs) => {
                    if (items.children && items.children instanceof Array && items.children.length > 0){
                        children2 = items.children.map((items1, indexs1) => {
                            return (
                                <Menu.Item key={index + '' + indexs + '' + indexs1}>{items1.name}</Menu.Item>
                            )
                        })
                        return (
                            <SubMenu key={index + '' + indexs}  title={items.name}>
                                {children2}
                            </SubMenu>
                        )
                    } else {
                        return (
                            <Menu.Item key={index + '' + indexs}>{items.name}</Menu.Item>
                        )
                    }
                })
            }
            return (
                <SubMenu key={index}  title={item.name}>
                    {children1}
                </SubMenu>
            )
        });

        return (
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 350 }}
                    // defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    {menuList}
                </Menu>
        );
    }
}

export default Sider