import React , {Component} from 'react';
import {InputItem} from 'antd-mobile';
import {connect} from 'react-redux';
import {checkPasswordDispatch} from '../../store/actions/singleMoney';
import {withRouter} from 'react-router-dom';
let mapState = (state)=>{
    let {isCheck} = state.singlemoney;
    return {isCheck}
}
let mapDispatch = (dispatch)=>{
    return {
        checkPwd(userpwd){
            dispatch(checkPasswordDispatch(userpwd));
        }
    }
}
@connect(mapState,mapDispatch)
@withRouter
class Password extends Component{
    constructor(props){
        super(props);
        this.state = {
            pwd:''
        }
    }
    render(){
        let {pwd} = this.state;
        return <div>
                <InputItem type="password" placeholder="请输入用户管理密码" value={pwd} onChange={this.pwdChange.bind(this)}onKeyDown={this.keyDown.bind(this)} />
            </div>
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isCheck){
            this.props.history.push('/layout/home');
        }
        
    }
    pwdChange(ev){
        this.setState({pwd:ev});
    }
    keyDown(ev){
        if(ev.keyCode===13){
           this.props.checkPwd(this.state.pwd); 
        }
    }
}
export default Password;