import React,{Component} from 'react';
import {List,Flex,Modal,InputItem} from 'antd-mobile';
class InputUserInfo extends Component{
    render(){
        let {visible,showOrHide,footer,userid,username,moneybase,changeMoneybase,changeUserid,changeUsername} = this.props;
        return  <Modal
        className="modal-self"
        visible={visible}
        transparent
        maskClosable={true}
        onClose={()=>{showOrHide(false)}}
        title="创建用户"
        footer={footer}
        >
            <List>
                <List.Item>
                    <Flex>
                        <label className="adduser">用户id：</label>
                        <Flex.Item><InputItem placeholder="输入用户id" value={userid} onChange={value=>changeUserid(value)} /></Flex.Item>
                    </Flex>
                </List.Item>
                <List.Item>
                    <Flex>
                        <label className="adduser">姓名：</label>
                        <Flex.Item><InputItem placeholder="输入用户名" value={username} onChange={value=>changeUsername(value)} /></Flex.Item>
                    </Flex>
                </List.Item>
                <List.Item>
                    <Flex>
                        <label className="adduser">金钱基数：</label>
                        <Flex.Item><InputItem placeholder="输入金钱基数" value={moneybase} onChange={value=>changeMoneybase(value)} /></Flex.Item>
                    </Flex>
                </List.Item>
            </List>
        </Modal>
    }
}

export default InputUserInfo;