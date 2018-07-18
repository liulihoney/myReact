import React , {Component} from 'react';
import {List,Flex} from 'antd-mobile';
import './index.css';
import {connect} from 'react-redux';
import {getSingleLogsDispatch} from '../../store/actions/singleMoney';
import {withRouter} from 'react-router-dom';
let mapState = (state)=>{
    let {singleLogs,chooseUsername} = state.singlemoney;
    return {singleLogs,chooseUsername}
}
let mapDispatch = (dispatch)=>{
    return {
        getLogs(userid){
            dispatch(getSingleLogsDispatch(userid));
        }
    }
}
@withRouter
@connect(mapState,mapDispatch)
class Detail extends Component{
    render(){
        let {chooseUsername,singleLogs} = this.props;
        return <div className="detail">
            <h1>{chooseUsername}</h1>
            
                <List>
                    {   
                        singleLogs && singleLogs.map((item,key)=>{
                            return <List.Item key={key}>
                                <Flex>
                                    <Flex.Item className="text-center">{item.time}</Flex.Item>
                                    <Flex.Item className="text-center">{item.logMoney}</Flex.Item>
                                    <Flex.Item className="text-center">{item.dowhat}</Flex.Item>
                                </Flex>
                                    
                                
                            </List.Item>
                        })
                    }
                </List>
            
            
        </div>
    }
    componentDidMount(){
        let userid = this.props.location.state && this.props.location.state.userid;
        this.props.getLogs(userid);
    }
}
Detail.defaultProps = {
    chooseUsername:'张三',
    singleLogs:[
        {
            time:'2018-7-15',
            logMoney:100,
            dowhat:'买菜'
        }
    ]
}
export default Detail;
