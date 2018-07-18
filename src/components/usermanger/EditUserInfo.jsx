import React , {Component} from 'react';
import {List,Flex,Modal,InputItem} from 'antd-mobile';
import {editUserDispatch} from '../../store/actions/userManger';
import {connect} from 'react-redux';
class EditUserInfo extends Component{
    constructor(props){
        super(props);
        this.footer = [
            {text:'确定',onPress:this.editUser.bind(this)},
            {text:'取消',onPress:()=>{this.props.closeModal()}}
        ]
    }
    render(){
        let {visible,username,changeUsername,closeModal} = this.props;
        let {footer} = this;
        return <Modal
        className="modal-self"
        visible={visible}
        transparent
        maskClosable={true}
        onClose={()=>{closeModal()}}
        title="编辑用户"
        footer={footer}
        >
            <List>
                <List.Item>
                    <Flex>
                        <label className="adduser">姓名：</label>
                        <Flex.Item><InputItem placeholder="输入用户名" value={username} onChange={value=>changeUsername(value)} /></Flex.Item>
                    </Flex>
                </List.Item>
            </List>
        </Modal>
    }
    editUser(){
        let {userid,username} = this.props;
        this.props.closeModal();
        this.props.editUser(userid,username);
    }
}
let mapState = (state)=>{
    return {}
}
let mapDispatch = (dispatch)=>{
    return {
        editUser(userid,username){
            dispatch(editUserDispatch(userid,username));
        }
    }
}
EditUserInfo = connect(mapState,mapDispatch)(EditUserInfo);
export default EditUserInfo;