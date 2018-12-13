//权限校验
import react, { Component } from 'react'
import { message } from 'antd';
import Redirect from 'umi/redirect';
import routes from './routes'
import { getCurrentRoute } from './AuthRoutes'
class Authorized extends Component{
    render(){
        return this.auth()  
    }
    auth(){//路由权限
        return this.props.children
    }
}
export default Authorized