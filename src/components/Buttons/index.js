import React, { Component } from 'react';
import { Button } from 'antd';
class Buttons extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
                {
                    this.props.btns.map((item,index)=>{
                       return(
                            <Button 
                                key={index} 
                                type={item.type}
                                style={{marginRight:'10px'}}
                                onClick={item.action}
                                icon={item.icon}> {item.text}
                            </Button>
                       ) 
                    })
                }
            </>
        ) 
    }
}

export default Buttons