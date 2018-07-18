import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
@withRouter
class TabBar extends Component{
    
    render(){
        let {tabbar} = this.props;
        let index = tabbar.findIndex(item=>item.path===this.props.location.pathname);
        return <div className="tab-bar">
            {
                tabbar.map((item,key)=>{
                    return <div style={{color:index===key?'#108ee9':'#333'}} onClick={this.barClick.bind(this,tabbar[key].path)} key={key}>
                        
                        <i className={'iconfont '+item.icon}></i>
                        
                        {item.text}
                    </div>
                })
            }
        </div>
    }
    barClick(path){
        this.props.history.push(path);
    }
}
export default TabBar;