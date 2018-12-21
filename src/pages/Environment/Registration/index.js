import React,{Component} from 'react';
import Tables from '@/components/Tables';
import Buttons from '@/components/Buttons';
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

    componentDidMount(){
        getVolumeList().then(result=>{
            // console.log(result)
        })
    }
    render(){
        return (
            <Buttons/>
            // <Tables 
            //     items={registrationS}
            //     columns={registrationC}
            //     pagination={this.pagination}
            //     onReset={this.onReset}
            //     onSubmit={this.onSubmit}
            // />
        )
    }
}

export default Registration