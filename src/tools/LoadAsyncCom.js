
import React from 'react';
import './loading.css';
import {connect} from 'react-redux';
let mapState = (state)=>{
    let {isLoading} = state.globals;
    return {isLoading}
}
export let LoadAsyncCom = (loadAble,Loading)=>{
    return class LoadAble extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                Load:Loading
            }
        }
        render(){
            let {Load} = this.state;
            return  <Load {...this.props} />
        }
        componentDidMount(){
            loadAble().then((com)=>{
                this.setState({Load:com.default});
            })
        }
    }
}
@connect(mapState)
export class Loading extends React.Component{
    render(){
        let {isLoading} = this.props;
        return <div className="loading" style={{display:isLoading?'block':'none'}}>
            <img src={require('../accets/loading.GIF')} alt=""/>
        </div>
    } 
}