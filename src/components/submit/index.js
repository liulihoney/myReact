import React , {Component} from 'react';
import {List,InputItem,Flex,DatePicker,Picker,Button,Modal} from 'antd-mobile';
import './index.css';
import {connect} from 'react-redux';
import {getAllUserDispatch} from '../../store/actions/userManger';
import {singleSubmitDispatch,SINGLEMONEY_SUBMIT} from '../../store/actions/singleMoney';
let mapState = (state)=>{
    let {userlist} = state.usermanger; 
    let {isSubmit,singleTotal} = state.singlemoney;
    userlist = userlist.map(item=>{
        return {label:item.username,value:item.userid}
    });
    return {userlist,isSubmit,singleTotal}
}
let mapDispatch = (dispatch)=>{
    return {
        getUser(){
            dispatch(getAllUserDispatch);
        },
        submit(data){
            dispatch(singleSubmitDispatch(data));
        },
        resetTip(singleTotal){
            dispatch({type:SINGLEMONEY_SUBMIT,isSubmit:null,singleTotal});
        }
    }
}
@connect(mapState,mapDispatch)
class Submit extends Component{
    constructor(props){
        super(props);
        this.state = {
            time:new Date(Date.now()),
            username:'',
            singlemoney:'',
            dowhat:''
        }
    }
    render(){
        let {time,username,singlemoney,dowhat} = this.state;
        let {userlist} = this.props;
        return <List>
            <DatePicker mode="date" onOk={(val)=>{this.setState({time:val})}} value={time}>
                <List.Item>
                    时间
                </List.Item>
            </DatePicker>
            <Picker data={userlist} value={username} cols={1} onOk={username=>this.setState({username})}>
                <List.Item>
                    姓名
                </List.Item>
            </Picker>
            
            <List.Item>
                <Flex>
                    <label htmlFor="singlemoney">金额</label>
                    <Flex.Item><InputItem placeholder="请输入金额" value={singlemoney} onChange={singlemoney=>this.setState({singlemoney})} /></Flex.Item>
                </Flex>
            </List.Item>
            <List.Item>
                <Flex>
                    <label htmlFor="dowhat">备注</label>
                    <Flex.Item><InputItem placeholder="请输入用途" value={dowhat} onChange={dowhat=>this.setState({dowhat})} /></Flex.Item>
                </Flex>
            </List.Item>
            <List.Item>
                <Button type="primary" onClick={this.submit.bind(this)}>确定</Button>
            </List.Item>
            <List.Item>
                <Button type="warning">清空</Button>
            </List.Item>
        </List>

    }
    componentDidMount(){
        this.props.getUser();
    }
    submit(){
        let {time,username,singlemoney,dowhat} = this.state;
        username = username.join();
        this.props.submit({time,username,singlemoney,dowhat}); 
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isSubmit === true){
            Modal.alert('提示',`提交成功,个人总计为${nextProps.singleTotal}元`,[{text:'确定',onPress:()=>{ this.props.resetTip(nextProps.singleTotal); }}]);
        }else if(nextProps.isSubmit === false){
            Modal.alert('提示',`提交失败`,[{text:'确定',onPress:()=>{ this.props.resetTip(0); }}]);
        }
    }
}

export default Submit;
