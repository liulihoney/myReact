import React,{Component} from 'react';
import {List,Flex,Modal} from 'antd-mobile';
import {connect} from 'react-redux';
import {delUserDispatch} from '../../store/actions/userManger';
class UserList extends Component{
    render(){
        let {userlist} = this.props;
        return <List>
        <List.Item>
            <Flex className="text-center">
                <Flex.Item>操作</Flex.Item>
                <Flex.Item>{'姓名'}</Flex.Item>
                <Flex.Item>{'用户id'}</Flex.Item>
                <Flex.Item>操作</Flex.Item>
            </Flex>
        </List.Item>
        {
            userlist && userlist.map((item,key)=>{
                return <List.Item key={key}>
                    <Flex className="text-center">
                        <Flex.Item onClick={this.itemEditClick.bind(this,item.userid,item.username)}><span className="iconfont icon-iconfontzhizuobiaozhunbduan10"></span></Flex.Item>
                        <Flex.Item>{item.username}</Flex.Item>
                        <Flex.Item>{item.userid}</Flex.Item>
                        <Flex.Item onClick={this.itemDelClick.bind(this,item.userid)}><span className="iconfont icon-shanchu"></span></Flex.Item>
                    </Flex>
                </List.Item>
            }) 
        }
    </List>
    }
    itemDelClick(userid){
        Modal.alert('警告','确认删除吗？',[{text:'确定',onPress:()=>{
            this.props.delUser(userid);
        }},{text:'取消'}]);
    }
    itemEditClick(userid,username){
        this.props.editShow(userid,username);
    }
}
let mapState = (state)=>{
    return {}
}
let mapDispatch = (dispatch)=>{
    return {
        delUser(userid){
            dispatch(delUserDispatch(userid));
        }
    }
}
UserList = connect(mapState,mapDispatch)(UserList);
export default UserList;