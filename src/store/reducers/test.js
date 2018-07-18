import {TEST_DIS,TEST_ADD,TEST_INIT} from '../actions/test';
let typeFn = {
    [TEST_ADD](state,action){
        state.num+=1;
    },
    [TEST_DIS](state,action){
        state.num-=1;
    },
    [TEST_INIT](state,action){
        state.num = action.num;
    }
}

let test = (state={num:0},action)=>{
    typeFn[action.type] && typeFn[action.type](state,action);
    return {...state};
}
export {test}