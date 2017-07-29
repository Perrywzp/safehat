import axios from 'axios';
export const list= (params)=>{return axios.get('/api/gateways/list/'+params.page+'/'+params.pageSize); }
export const add = (params)=>{return axios.post("/api/gateways",params)}