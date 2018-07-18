import React , {Component} from 'react';
import NavBar from './NavBar';
import UserList from './List';
import InputUserInfo from './InputUserInfo';
import EditUserInfo from './EditUserInfo';
import {Modal} from 'antd-mobile';
import {connect} from 'react-redux';
import {getAllUserDispatch,submitSingleUserDispatch,USERMANGER_ISADD,USERMANGER_ISDEL,USERMANGER_ISEDIT} from '../../store/actions/userManger';
import './index.css';
class UserManger extends Component{
    constructor(props){
        super(props);
        this.state = {
            editVisible:false,
            editUsername:'',
            editUserid:'',
            visible:false,
            userid:'',
            username:'',
            moneybase:''
        }
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.footer = [
            {
                text: '确定', 
                onPress: () => { this.onOk()  }
            },
            {
                text:'取消',
                onPress: ()=>{this.onCancel()}
            }
        ]
    }
    render(){
        let {visible,userid,username,moneybase,editUsername,editVisible,editUserid} = this.state;
        let {userlist} = this.props;
        return <div>
            <NavBar showOrHide={this.showOrHide.bind(this)} />
            <UserList userlist={userlist} editShow={this.editShow.bind(this)} />
            <InputUserInfo
                visible={visible}
                userid={userid}
                username={username}
                moneybase={moneybase}
                showOrHide={this.showOrHide.bind(this)}
                footer={this.footer}
                changeUserid={value=>this.setState({userid:value})}
                changeUsername={value=>this.setState({username:value})}
                changeMoneybase={value=>this.setState({moneybase:value})}
             />
            <EditUserInfo 
                visible={editVisible} 
                username={editUsername}
                userid={editUserid}
                changeUsername={this.editChangeUsername.bind(this)}
                closeModal={this.editCloseModal.bind(this)}
              />
        </div>
    }
    onOk(){//添加的确定按钮
        let {userid,username,moneybase} = this.state;
        this.showOrHide(false);
        this.props.addUser({userid,username,moneybase});//添加用户的动作

    }
    onCancel(){ //添加的取消按钮
        this.showOrHide(false);
    }
    showOrHide(flag){
        // console.log(flag);
        if(!flag){
            this.setState({visible:flag,userid:'',username:'',moneybase:''});
        }else{
            this.setState({visible:flag});
        }
    }
    editShow(editUserid,editUsername){//显示修改用户弹框
        let editVisible = true;
        this.setState({editUserid,editUsername,editVisible});
    }
    editChangeUsername(editUsername){
        this.setState({editUsername})
    }
    editCloseModal(){
        this.setState({editVisible:false});
    }
    componentDidMount(){
        this.props.getAllUsers();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isAdd === true){
            Modal.alert('提示','添加成功',[{text:'确定',onPress:()=>{this.props.resetIsAdd(null)}}]);
        }else if(nextProps.isAdd === false){
            Modal.alert('提示','添加失败',[{text:'确定',onPress:()=>{this.props.resetIsAdd(null)}}]);
        }else if(nextProps.isDel===true){
            Modal.alert('提示','删除成功',[{text:'确定',onPress:()=>{this.props.resetIsDel(null)}}]);
        }else if(nextProps.isDel===false){
            Modal.alert('提示','删除失败',[{text:'确定',onPress:()=>{this.props.resetIsDel(null)}}]);
        }else if(nextProps.isEdit===true){
            Modal.alert('提示','修改成功',[{text:'确定',onPress:()=>{this.props.resetIsEdit(null)}}]);
        }else if(nextProps.isEdit===false){
            Modal.alert('提示','修改失败',[{text:'确定',onPress:()=>{this.props.resetIsEdit(null)}}]);
        }
    } 
}
let mapState = (state)=>{
    let {userlist,isAdd,isDel,isEdit} = state.usermanger; 
    return {
        userlist,isAdd,isDel,isEdit
    }
}
let mapDispatch = (dispatch)=>{
    return {
        getAllUsers(){
            dispatch(getAllUserDispatch);
        },
        addUser(data){
            dispatch(submitSingleUserDispatch(data));
        },
        resetIsAdd(isAdd){
            dispatch({type:USERMANGER_ISADD,isAdd});
        },
        resetIsDel(isDel){
            dispatch({type:USERMANGER_ISDEL,isDel});
        },
        resetIsEdit(isEdit){
            dispatch({type:USERMANGER_ISEDIT,isEdit});
        }
    }
}
UserManger = connect(mapState,mapDispatch)(UserManger);
export default UserManger;
