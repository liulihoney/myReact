import React , {Component} from 'react';
import List from './List';
import './index.css';
import {connect} from 'react-redux';
import {getSingleMoneyDispatch} from '../../store/actions/singleMoney';
let mapState = (state)=>{
    let {list,totalMoney} = state.singlemoney;
    return {list,totalMoney}
}
let mapDispatch = (dispatch)=>{
    return {
        getSingleMoney(){
            dispatch(getSingleMoneyDispatch);
        }
    }
}
@connect(mapState,mapDispatch)
class Home extends Component{
    render(){
        let {totalMoney,list} = this.props;
        return <div className="home">
            <h1>{totalMoney}</h1>
            <List list={list} />
        </div>
    }
    componentDidMount(){
        this.props.getSingleMoney();
    }
}
Home.defaultProps = {
    totalMoney:1000
}

export default Home;
