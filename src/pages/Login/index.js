import React, { Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import routes from '@/utils/routes';
import styles from './index.less';
const FormItem = Form.Item;

class Login extends Component{

    state = {
        loading: false,
    }

    enterLoading = () => {
        this.setState({ loading: true });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                window.g_app._store.dispatch({
                    type:'user/login',
                    payload:values
                })
                this.setState({ loading: true });
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
export default Form.create()(Login);