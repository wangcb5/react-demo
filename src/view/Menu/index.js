import React from 'react'
import { Layout, Menu, Spin,Tabs } from 'antd';
const { SubMenu } = Menu;
const { TabPane } = Tabs;
import { LoadingOutlined } from '@ant-design/icons';
import {observer, inject} from 'mobx-react'
const { Header, Content, Footer, Sider } = Layout;
import logo from '../../static/img/logo.png'

@inject('store') @observer
class MenuCpm extends React.Component {
    state = {
        theme: 'dark',
        current: '1',
        menuWidth: 260
    };


    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    onCollapseHandler = (collapsed, type) => {
      console.log(collapsed, type)
        if (collapsed) {
            this.setState({
                menuWidth: 80
            })
        } else {
            this.setState({
                menuWidth: 260
            })
        }
    };

    Tabscallback = (key) => {
        console.log(key)
    }

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
            <Layout>
                <Header className="header"
                        style={{
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            width: '100%'
                        }}
                >
                    <div style={{
                        width: '260px',
                        height: '100%',
                        overflow: 'hidden',
                        backgroundColor: '#1E2640',
                        textAlign: 'center'
                    }}>
                        <a style={{
                            display: 'inline-block',
                            width: '100%',
                            height: '100%'
                        }} className="logoA" href="#">
                            <img
                                src={logo}
                                style={{
                                    width: 135,
                                    marginTop: 10
                                }}
                            />
                        </a>
                    </div>

                    <span style={{
                        color: '#fff',
                        fontSize: 20
                    }}>
                        header
                    </span>
                </Header>
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 64
                    }}
                    onCollapse={this.onCollapseHandler}
                    collapsible={true}
                    width={this.state.menuWidth}
                >
                    <Spin  spinning={this.props.store.menuStore.menuList.length ? false : true}   tip="Loading...">
                        <Menu
                            theme={this.state.theme}
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="inline"
                            style={{
                                paddingBottom: '112px'
                            }}
                        >
                            {menuList}
                        </Menu>
                    </Spin>
                </Sider>
                <Content
                        style={{
                            position: 'fixed',
                            left: this.state.menuWidth,
                            top: 64,
                            height: '100vh',
                            overflow: 'auto',
                            background: '#eee'
                        }}
                    >
                    <Spin  spinning={false}   tip="Loading..." size="large">
                        <div className="site-layout-background"
                             style={{
                                 padding: '40px 20px 104px 20px',
                                 margin: '40px 0 0 20px'
                             }}
                        >

                            123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123123 123 123 123 123 123 123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            123
                            <br/>
                            456

                        </div>
                    </Spin>
                    </Content>
            </Layout>
            </Layout>
        );
    }
}

export default MenuCpm