import React,{Component} from 'react';
import {NavBar as AntdNavBar,Icon} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
@withRouter
class NavBar extends Component{
    render(){
        return <AntdNavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={this.leftClick.bind(this)}
        rightContent={[<span onClick={()=>{this.props.showOrHide(true)}} key="0" className="iconfont icon-zengjia"></span>]}
        >用户管理</AntdNavBar>
    }
    leftClick(){
        this.props.history.push('/layout/home');
    }
}


export default NavBar;