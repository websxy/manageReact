import React, { Component } from 'react';
import Link from 'umi/link';
import { Breadcrumb, Icon } from 'antd';

class CustomBreadcrumb extends Component{
    render(){
        return (
            <Breadcrumb style={{padding:'10px 20px 5px'}}>
                <Breadcrumb.Item>
                    <Link to='/'> 主页 </Link>
                </Breadcrumb.Item>
                {this.props.activeMenu.map(item => {
                    return (
                        <Breadcrumb.Item key={item.path}>
                            {item.component ? <Link to={item.path} replace>{item.name}</Link> : <span>{item.name}</span>}
                        </Breadcrumb.Item>
                    )
                })}
            </Breadcrumb>
        )
    }
}

export default CustomBreadcrumb