import React , {Component} from 'react';
import {List} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
@withRouter
class SingleMoneyList extends Component{
    render(){
        let {list} = this.props;
        return <List>
            {
                list && list.map((item,key)=>{
                    return <List.Item onClick={this.chooseUser.bind(this,item.userid)} key={key} extra={item.singleMoney}>{item.username}</List.Item>
                })
            }
            
        </List>
    }
    chooseUser(userid){
        this.props.history.push({pathname:'/layout/detail',state:{userid}});
    }
}

SingleMoneyList.defaultProps = {
    list:[
        {username:'张三',singleMoney:100}
    ]
}

export default SingleMoneyList;