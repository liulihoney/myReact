import axios from 'axios';
import {PORT} from './port';
export const getSingleMoneyListApi = ()=>{
    return axios.get(PORT+'/singlemoney');
}
export const checkPwdApi = (userpwd)=>{
    return axios.post(PORT+'/checkpassword',{userpwd});
}

export const getSingleLogsApi = (userid)=>{
    return axios.post(PORT+'/getsinglelogs',{userid});
}

export const singleSubmitApi = (data)=>{
    return axios.post(PORT+'/submit',data);
}