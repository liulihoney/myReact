import {SINGLEMONEY_LIST,SINGLEMONEY_TOTALMONEY,SINGLEMONEY_ISCHECK,SINGLEMONEY_LOGS_INIT,SINGLEMONEY_SUBMIT,SINGLEMONEY_COMPUTED} from '../actions/singleMoney';
const oTypes = {
    [SINGLEMONEY_LIST](state,action){
        state.list = action.list;
    },
    [SINGLEMONEY_TOTALMONEY](state,action){
        state.totalMoney = state.list.reduce((pre,next)=>pre+next.singleMoney,0);
    },
    [SINGLEMONEY_ISCHECK](state,action){
        state.isCheck = action.isCheck;
    },
    [SINGLEMONEY_LOGS_INIT](state,action){
        state.singleLogs = action.singleLogs;
        state.chooseUsername = action.chooseUsername;
    },
    [SINGLEMONEY_SUBMIT](state,action){
        state.isSubmit = action.isSubmit;
        state.singleTotal = action.singleTotal;
    },
    [SINGLEMONEY_COMPUTED](state,action){
        let len = state.list.length;
        state.computedData = state.list.map(item=>{
            let {username,singleMoney:singleTotal} = item;
            let average = parseFloat((state.totalMoney/len).toFixed(2));
            let propStr = singleTotal>=average?'receive':'pay';
            return {[propStr]:Math.abs(singleTotal-average),username,singleTotal,average}
        });
    }

}
export let singlemoney = (state={list:[],chooseUsername:'',totalMoney:0,isCheck:null,singleLogs:[],isSubmit:null,singleTotal:0,computedData:[]},action)=>{
    oTypes[action.type] && oTypes[action.type](state,action);
    return {...state,list:[...state.list],singleLogs:[...state.singleLogs]};
}

