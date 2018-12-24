import React,{Component} from 'react';
import Tables from '@/components/Tables';
import { registrationC } from '@/uiConfig/thead/TabSource'
import { registrationS } from '@/uiConfig/searchs'
import { registrationB } from '@/uiConfig/buttons'
import { getVolumeList } from '@/services/api'

class Registration extends Component{

    constructor(props){
        super(props);
    }

    state = {
        bordered : false,
        loading:false
    }

    //重置请求列表数据
    onReset = () => {
        alert(1)
    }
    //提交查询方法
    onSubmit = (err, value) => {
        if (err) {
            return;
        }
        console.log(value)
    };
    //翻页
    pagination = (pageNumber) => {
        console.log(pageNumber);
    }


    add = () => {
        alert('新增')
    }

    del = () =>{
        alert('删除')
    }


    setBtnsAction(){
         registrationB.map( item => {
            item.action = this[item.action]
        });
        return registrationB;
    }

    componentWillMount(){
        this.setBtnsAction();
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
                bordered={this.state.bordered}
                pagination={this.pagination}
                onReset={this.onReset}
                onSubmit={this.onSubmit}
            />
        )
    }
}

export default Registration