import axios from 'axios';
import {PORT,testPort} from './port'
export const getAllUsers = ()=>{
    return axios.get(testPort+'/getallusers');
}
export const submitSingleUser = (data)=>{
    return axios.post(testPort+'/submitsingleuser',data);
}
export const delUserApi = (userid)=>{
    return axios.post(PORT+'/deluser',{userid});
}
export const editUserApi = (userid,username)=>{
    return axios.post(PORT+'/edituser',{userid,username});
}
