import React from 'react';
import {config} from './routerConfig';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import {Loading} from '../tools/LoadAsyncCom';
function RootRouter(props){
    return <Router>
        <div>
            <Loading />
            <Switch>
                {
                    config.map((item,key)=>{
                        return <Route key={key} path={item.path} render={({match,location})=>{
                            let Transion = item.component;
                            return <Transion child={item.children} match={match} location={location} />
                        }}></Route>
                    })
                
                }
                <Redirect from="/" to="/login" />
            </Switch>
        </div>
        
    </Router>
}
export default RootRouter;