import React, { Component } from 'react';
import Link from 'umi/link';
import { Breadcrumb, Icon } from 'antd';

class CustomBreadcrumb extends Component{

    state = {
        routesArr:[],
        activeRouter:'/environment/registration',
      };

    routesList =(menu) =>{
        menu.map(item=>{
            if(!item.routes && activeRouter.includes(item.path)){
                routesArr.push(item);
                return
            }
            if (activeRouter.includes(item.path)) {
                routesArr.push(item)
                this.routesList(item.routes)
            }
        })
    }

    render(){
        return (
            <Breadcrumb>
              {this.state.routesArr.map(item=>{
                <Breadcrumb.Item key={item.path}>
                  <Link to={item.path}>
                    {item.name}
                  </Link>
                </Breadcrumb.Item>
              })}
            </Breadcrumb>
        )
    }
}

export default CustomBreadcrumb