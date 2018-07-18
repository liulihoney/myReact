import React , {Component} from 'react';
import Header from './Header';
import {Route , Switch} from 'react-router-dom';
import './index.css';
import TabBar from './TabBar';
const tabbarText = ['首页','详情','提交','结算'];
const tabbarIcon = ['icon-home','icon-detail','icon-jiesuan','icon-jiesuan'];
class Layout extends Component{
    render(){
        let {child,match} = this.props;
        let tabbar = child.map((item,key)=>{
            return {path:match.url+item.path,text:tabbarText[key],icon:tabbarIcon[key]}
        })
        return <div className="layout">
            <Header tabbar={tabbar}></Header>
            <section className="content">
                <Switch>
                    {
                        child && child.map((item,key)=>{
                            return <Route key={key} path={match.url+item.path} component={item.component} />
                        })
                    }
                </Switch>
            </section>
            
            <TabBar tabbar={tabbar} />
        </div>
    }
}

export default Layout;
