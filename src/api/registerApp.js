import axios from 'axios'
import {PORT} from './port'
export function registerApi(){
    return axios.post(PORT+'/register');
}

export function getInitalNumApi(){
    return axios.get('/num');
}


