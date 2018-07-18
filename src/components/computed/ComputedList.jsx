import React , {Component} from 'react';
import {List,Flex} from 'antd-mobile';
import {getSingleMoneyDispatch} from '../../store/actions/singleMoney';
import {connect} from 'react-redux';
let mapState = (state)=>{
    let {computedData} = state.singlemoney;
    return {computedData}
}
let mapDispatch = (dispatch)=>{
    return {
        computed(){
            dispatch(getSingleMoneyDispatch);
        }
    }
}
@connect(mapState,mapDispatch)
class ComputedList extends Component{
    render(){
        let {computedData} = this.props;
        return <List>
            <List.Item>
                        <Flex>
                            <Flex.Item>姓名</Flex.Item>
                            <Flex.Item>个人总计</Flex.Item>
                            <Flex.Item>平均金额</Flex.Item>
                            <Flex.Item>应付款</Flex.Item>
                            <Flex.Item>应收款</Flex.Item>
                        </Flex>
                    </List.Item>
            {   
                computedData && computedData.map((item,key)=>{
                    return <List.Item key={key}>
                        <Flex>
                            <Flex.Item>{item.username}</Flex.Item>
                            <Flex.Item>{item.singleTotal}</Flex.Item>
                            <Flex.Item>{item.average}</Flex.Item>
                            <Flex.Item>{item.pay?item.pay:0}</Flex.Item>
                            <Flex.Item>{item.receive}</Flex.Item>
                        </Flex>
                    </List.Item>
                })
            }
        </List>
    }
    componentDidMount(){
        this.props.computed();
    }
}

export default ComputedList;