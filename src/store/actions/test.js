import {getInitalNumApi} from '../../api/registerApp';
export const TEST_ADD = 'TEST_ADD';
export const TEST_DIS = 'TEST_DIS';
export const TEST_INIT = 'TEST_INIT';
export function getInitalNum (dispatch){
    getInitalNumApi().then((num)=>{
        dispatch({type:TEST_INIT,num});
    });
}