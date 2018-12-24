import React,{Component} from 'react';
import Tables from '@/components/Tables';
import { registrationC } from '@/uiConfig/thead/TabSource'
import { registrationS } from '@/uiConfig/searchs'
import { registrationB } from '@/uiConfig/buttons'
import { getVolumeList } from '@/services/api'

class Registration extends Component{
    //重置请求列表数据
    onReset = () => {
        alert(1)
    }
    //提交查询方法
    onSubmit = (err, value) => {
        if (err) {
            return;
        }
    };
    //翻页
    pagination = (pageNumber) => {
        console.log(pageNumber);
    }

    add = () =>{
        alert('新增')
    }

    componentDidMount(){
        getVolumeList().then(result=>{
            // console.log(result)
        })
    }
    render(){
        return (
            <Tables 
                items={registrationS}
                columns={registrationC}
                btns={registrationB}
                pagination={this.pagination}
                onReset={this.onReset}
                onSubmit={this.onSubmit}
            />
        )
    }
}

export default Registration