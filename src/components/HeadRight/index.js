import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from './index.less';
class HeadRight extends Component{

    quit() {
       alert(1)
    }

    render(){
        return (
           <div className={styles.head_right}>
            <div className={styles.userManage}>
                <Icon type="user"/>
                <span>11111</span>
            </div>
            <div className={styles.btns} onClick={this.quit}>
            <Icon type="logout" /><span>退出</span>
            </div>
           </div>
        )
    }
}

export default HeadRight