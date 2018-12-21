import React, { Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import routes from '@/utils/routes';
import router from 'umi/router';
import styles from './index.less';
import { setCookie } from '@/utils/cookie'
const FormItem = Form.Item;

class Login extends Component{

    state = {
        loading: false,
    }

    enterLoading = () => {
        this.setState({ loading: true });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                this.setState({ loading: true });
                await this.props.dispatch({
                    type:'user/login',
                    payload:values
                })
                await this.props.dispatch({
                    type:'user/licenseVerify'
                })
                router.push('/home');
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.login_wapper}>
                <div className={styles.user_layout}>
                    <div className={styles.user_layout_top}>
                        <img src={require('../../assets/TanSun.png')}/>
                    </div>
                    <div className={styles.user_layout_main}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('pwd', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />
                                )}
                            </FormItem>
                            <FormItem>
                                <Button loading={this.state.loading} type="primary" block htmlType="submit" className="login-form-button">登录</Button>
                            </FormItem> 
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
 const mapStateToProps = (state,ownProps )=>{
     return{
        token : state.user.crsf_token,
     }
 }

export default withRouter(connect(mapStateToProps)(Form.create()(Login)));