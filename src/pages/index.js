import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.less';
import routes from '../utils/routes';
import Link from 'umi/link';
import CustomBreadcrumb from '../components/Breadcrumb'
import { getCurrentRoute } from '../utils/AuthRoutes';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class layoutComponent extends React.Component {
    state = {
        collapsed: false,
        openKeys:'',
        openDoubleKeys:'',
        clickKey:'',
    };

    toggle=() => {
        this.setState({
            collapsed: !this.state.collapsed,
        });

        if(this.state.collapsed){   
            this.setState({
                openKeys: this.state.openDoubleKeys?this.state.openDoubleKeys:this.getOpenKeys(),
            });
        }else{
            this.clearSubMenu()
        }
    }

    getMenu(){
        let r = routes[1].routes;
        return this.getMenuList(r)
    }

    getMenuList(menus){
        let vnode = [];
        menus.forEach(menu => {
            if(!menu.routes && menu.path && menu.name){
                vnode.push (
                    <Menu.Item key={menu.path}>
                        <Link to={menu.path} replace>
                            <Icon type={menu.icon} />
                            <span>{menu.name}</span>
                        </Link>         
                    </Menu.Item>
                )         
            }else if(menu.routes){
                vnode.push(
                    <SubMenu key={menu.path} onTitleClick={this.openSubMenu} title={<span><Icon type={menu.icon} /><span>{menu.name}</span></span>}>
                        {this.getMenuList(menu.routes)}
                    </SubMenu>
                )
            }
        })
        return vnode;
    }

    nowSelect=({ item, key, selectedKeys })=>{   //当选择的是一级菜单的时候 关闭其他打开的submenu
        this.state.clickKey = key;
        if(key.split('/').length>2)
            return
        this.clearSubMenu()   
    }

    getRouteKey(){//根据路径名称得到选中的菜单
        return this.props.location.pathname
    }

    getOpenKeys(){//第一次进来 根据地址栏 获取默认选中菜单
        let route = getCurrentRoute(routes,this.props.location.pathname)[0]//获取当前路由地址下的对应路由表的信息
        return route ? route.fatherKey : ''
    }

    openSubMenu=({ key, domEvent })=>{//当前打开的submenu 关闭其他展开的
        if(key!==(this.state.openKeys?this.state.openKeys:this.getOpenKeys())){
            this.setState({
                openKeys:key,
                openDoubleKeys:key
            })
            return
        }
        this.clearSubMenu()
    }

    clearSubMenu=()=>{
        this.setState({
            openKeys:'null',
        }) 
    }

    /* 当前路由 */
    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}  width={'18vw'} style={{height: '100vh'}}>
                    <div className={styles.logo}>
                        <a href="/">
                            <img src={require('../assets/logo.png')} />
                            <h1>天阳科技111</h1>
                        </a>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} selectedKeys={[this.getRouteKey()]} openKeys={[this.state.openKeys?this.state.openKeys:this.getOpenKeys()]} onSelect={this.nowSelect}>
                        {this.getMenu()}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <span onClick={this.toggle} className={styles.toggle}>
                            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                        </span>
                    </Header>
                    <CustomBreadcrumb></CustomBreadcrumb>
                    <Content style={{ margin: '10px 16px', padding: 24, background: '#fff', minHeight: 280,}}>
                       {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default layoutComponent