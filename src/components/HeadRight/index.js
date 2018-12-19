import React, { Component } from 'react';
import { Icon, Popconfirm, message } from 'antd';
import { delCookie, getCookie } from '@/utils/cookie';
import { logout } from '@/services/api';
import router from 'umi/router';
import styles from './index.less';
class HeadRight extends Component{

    state = {
        userName:''
    }
    componentWillMount() {
        this.getUserName()
    }

    quit() {
        logout('/dam/logout.do').then((result) => {
            router.push('/login');
            delCookie('crsf_token')
        })
    }

    getUserName(){
         this.setState({userName: getCookie('user_name').replace(/\"/g,'')});
    }

    render(){
        return (
           <div className={styles.head_right}>
            <div className={styles.userManage}>
                <Icon type="user"/>
                <span>{this.state.userName}</span>
            </div>
            <div className={styles.btns}>
                <Popconfirm title='是否退出本系统？' placement='bottomRight' onConfirm={this.quit}  okText="Yes" cancelText="No">
                <Icon type="logout" /><span>退出</span>
                </Popconfirm>,
            </div>
           </div>
        )
    }
}

export default HeadRight