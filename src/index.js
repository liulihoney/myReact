import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './accets/iconfont/iconfont.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
if(process.env.NODE_ENV==='development'){//开发环境
    require('./mock');
    registerServiceWorker();
}

