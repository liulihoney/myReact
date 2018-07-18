import {combineReducers} from 'redux';
import {test} from './test'
import {usermanger} from './userMager'
import {singlemoney} from './singleMoney'
import {globals} from './global'
let reducer = combineReducers({
    test,usermanger,singlemoney,globals
});
export default reducer;