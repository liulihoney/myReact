import React , {Component} from 'react';
import { NavBar} from 'antd-mobile';
import {withRouter,Link} from 'react-router-dom';
const titles = ['首页','查看详情','个人提交','结账'];
@withRouter
class Header extends Component{
    render(){
        let {tabbar} = this.props;
        let index = tabbar.findIndex(item=>item.path===this.props.location.pathname);
        return <NavBar mode="dark" icon={<Link to={{pathname:'/usermanger'}}><span className="iconfont icon-caidan"></span></Link>}>{titles[index]}</NavBar>
    }
}
export default Header;