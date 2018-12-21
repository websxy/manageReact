import React, { Component } from 'react';
import Link from 'umi/link';
import { Breadcrumb, Icon } from 'antd';

class CustomBreadcrumb extends Component{
    render(){
        return (
            <Breadcrumb style={{padding:'15px 20px 8px'}}>
                <Breadcrumb.Item>
                    <Link to='/'> <Icon type="home" /> 主页</Link>
                </Breadcrumb.Item>
                {this.props.activeMenu.map(item => {
                    if(item.path !== '/home'){
                        return (
                            <Breadcrumb.Item key={item.path}>
                                {item.component ? <Link to={item.path} replace>{item.name}</Link> : <span>{item.name}</span>}
                            </Breadcrumb.Item>
                        )
                    }
                    return false;
                })}
            </Breadcrumb>
        )
    }
}

export default CustomBreadcrumb