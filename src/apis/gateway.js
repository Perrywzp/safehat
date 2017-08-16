import axios from 'axios';
export const list= (params)=>{return axios.get('/helmet/api/gateways/list/'+params.page+'/'+params.pageSize); }
export const add = (params)=>{return axios.post("/helmet/api/gateways",params)}
