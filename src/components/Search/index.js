import React, { Component } from 'react';
import {Form, Row, Col, Input, Select, Button, DatePicker } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class Search extends Component {

    constructor(props){
        super(props);
        this.colLength = 3;
    }
    //根据items长度判断需要显示几行
    getChildren(items, getFieldDecorator) {
        const len = items.length;
        const rowLen = Math.ceil(len / this.colLength);
        let rowArr = [];
        for (let i = 0, j = rowLen; i < j; i++) {
            rowArr.push(
                <Row key={i}>{
                    this.getColItem(items, getFieldDecorator, i)
                }
                </Row>
            );
        }
        return rowArr;
    }

    getColItem(items, getFieldDecorator, start) {
        const colArr = [];
        const _this = this;
         //从items数组第几个元素开始循环
        const _start = start * this.colLength;
        //剩余几个对象没有遍历渲染
        const _surplus = items.length - _start;
        let len;
        //如果剩下的小于3 长度直接登录items的长度
        if (_surplus < this.colLength) {
            len = items.length;
        } else {
            //如果剩下的大于3，那么长度等于开始索引加3
            len = _start + this.colLength;
        }
        for (let i = _start, j = len; i < j; i++) {
            const index = i;
            const value = items[i];
            const _offset = index % this.colLength === 0 ? 0 : 1;
            let _type = value.type;
            let _options;
            if (value.hasOwnProperty('options')) {
                _options = value.options;
            }else {
                if (_type === 'DatePicker') {
                  //
                } else {
                  _type = 'Input';
                }
            }
            let _rulesType = 'number';
            if (_type === 'Input') {
                _rulesType = 'string';
            } else if (_type === 'DatePicker') {
                _rulesType = 'object';
            }
            if (value.typeDiff) {
                _rulesType = 'string';
            }
            const formItemLayout = {
                labelCol: {
                  span: 8,
                },
                wrapperCol: {
                  span: 16,
                },
            };
            colArr.push(
                <Col key={index} xl={{span: 7, offset: _offset}} lg={{span: 8}} md={{span: 12}} sm={24}>
                    <FormItem label={`${value.label}：`} {...formItemLayout}>
                        {getFieldDecorator(value.parameter, {
                            rules: [{
                                required: value.required,
                                message: value.placeholder,
                                pattern: value.pattern ? value.pattern : '',
                                type: _rulesType
                            }]
                        })(
                            _this.switchItem(_type, value.placeholder, _options)
                        )}
                    </FormItem>
                </Col>
            )
        }
        return colArr;
    }

    //如果是Select需要传入options
    switchItem(which, placeholder, options) {
        const _this = this;
        switch (which) {
            case 'Input':
                return <Input placeholder={placeholder} onChange={this.handleSubmit}/>
            case 'Select':
                return <Select placeholder={placeholder}>{_this.getOption(options)}</Select>
            case 'DatePicker':
                return <DatePicker placeholder={placeholder}/>
            default:
                break
        }
    }
    getOption(data) {
        if (!data) {
            return;
        }
        return data.map((value, index) => {
            return <Option key={index} value={value.key}>{value.value}</Option>
        })
    }

    //重置输入框内容
    handleReset = () => {
        this.props.form.resetFields();
        if (this.props.onReset) {
            this.props.onReset();
        }
    };

    //提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            this.props.onSubmit(err, fieldsValue);
        });
    };
    render() {
        const {items, form, loading} = this.props;
        const {getFieldDecorator} = form;
        return(
            <Form layout="horizontal">
                { this.getChildren(items, getFieldDecorator) }
                {/* <Row type="flex" justify="end">
                    <Col>
                        <FormItem>
                            <Button type="default" htmlType="button" style={{marginRight: '10px'}} onClick={this.handleReset}>重置</Button>
                            <Button loading={loading} type="primary" htmlType="submit">查询</Button>
                        </FormItem>
                    </Col>
                </Row> */}
                { this.props.children}
            </Form>
        )
    }
}

export default Form.create()(Search);
