import {getAllUsers,submitSingleUser,delUserApi,editUserApi} from '../../api/userManger';
import {GLOBAL_ISLOADING} from './global';
export const USERMANGER_INIT_USER = 'USERMANGER_INIT_USER';
export const USERMANGER_ADD_USER = 'USERMANGER_ADD_USER';
export const USERMANGER_ISADD = 'USERMANGER_ISADD';
export const USERMANGER_USER_DEL = 'USERMANGER_USER_DEL';
export const USERMANGER_ISDEL = 'USERMANGER_ISDEL';
export const USERMANGER_EDIT_USER = 'USERMANGER_EDIT_USER';
export const USERMANGER_ISEDIT = 'USERMANGER_ISEDIT';
export let getAllUserDispatch = (dispatch)=>{
    dispatch({type:GLOBAL_ISLOADING,isLoading:true});
    getAllUsers().then((response)=>{
        dispatch({type:GLOBAL_ISLOADING,isLoading:false});
        if(response.data.code === 1){
            let users = response.data.data;
            dispatch({type:USERMANGER_INIT_USER,users});
            dispatch({type:USERMANGER_ISADD,isAdd:null});
        }
        
    })
}
export let submitSingleUserDispatch = (data)=>{
    return (dispatch)=>{
        dispatch({type:GLOBAL_ISLOADING,isLoading:true});
        submitSingleUser(data).then((response)=>{
            dispatch({type:GLOBAL_ISLOADING,isLoading:false});
            if(response.data.code === 1){
                dispatch({type:USERMANGER_ADD_USER,userinfo:data});
                dispatch({type:USERMANGER_ISADD,isAdd:true});
            }else{
                dispatch({type:USERMANGER_ISADD,isAdd:false});
            }
        })
    }
}

export let delUserDispatch = (userid)=>{
    return (dispatch)=>{
        dispatch({type:GLOBAL_ISLOADING,isLoading:true});
        delUserApi(userid).then(response=>{
            dispatch({type:GLOBAL_ISLOADING,isLoading:false});
            if(response.data.code===1){
                dispatch({type:USERMANGER_USER_DEL,userid});
                dispatch({type:USERMANGER_ISDEL,isDel:true});
            }
        })
    }
}

export let editUserDispatch = (userid,username)=>{
    return (dispatch)=>{
        dispatch({type:GLOBAL_ISLOADING,isLoading:true});
        editUserApi(userid,username).then((response)=>{
            dispatch({type:GLOBAL_ISLOADING,isLoading:false});
            if(response.data.code===1){
                dispatch({type:USERMANGER_EDIT_USER,userid,username});
                dispatch({type:USERMANGER_ISEDIT,isEdit:true});
            }
        })
    }
}