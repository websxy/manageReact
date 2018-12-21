import React, { Component } from 'react';
import { Button, Icon} from 'antd';

const registrationB = [{
    title: '新增',
    icon: 'download',
    acton:'add',
    type:'primary'
  }, {
    title: '新增',
    icon: 'download',
    acton:'add',
    type:'primary'
  }, {
    title: '新增',
    icon: 'download',
    acton:'add',
    type:'primary'
  }];


class Bottons extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
                {
                    registrationB.map((item,index)=>{
                       return(
                            <Button key={index} type={item.type} icon={item.icon}>{item.title}</Button>
                       ) 
                    })
                }
            </>
        ) 
    }
}

export default Bottons