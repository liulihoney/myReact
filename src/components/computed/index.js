import React , {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleMoneyDispatch} from '../../store/actions/singleMoney';
import ComputedList from './ComputedList.jsx';
let mapState = (state)=>{
    let {totalMoney} = state.singlemoney;
    return {totalMoney}
}
let mapDispatch = (dispatch)=>{
    return {
        getTotalMoney(){
            dispatch(getSingleMoneyDispatch);
        }
    }
}
@connect(mapState,mapDispatch)
class Computed extends Component{
    render(){
        let {totalMoney} = this.props;
        return <div>
            <h1>总金额：{totalMoney}</h1>
            <ComputedList></ComputedList>
        </div>
    }
    componentDidMount(){
        this.props.getTotalMoney();
    }
}
export default Computed;
