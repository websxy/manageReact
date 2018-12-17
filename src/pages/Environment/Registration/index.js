import React,{Component} from 'react';
import { Button, Icon } from 'antd';
import Tables from '../../../components/Tables'

class Registration extends Component{
    render(){
        return (
            <div>
                <div class='btns'>
                    <Button type="primary" icon="left">新建卷</Button>
                    <Button type="primary" icon="download">更改</Button>
                </div>
 
                <Tables></Tables>
           </div>
        )
    }
}

export default Registration