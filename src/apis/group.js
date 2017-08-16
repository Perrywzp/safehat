import axios from 'axios';
export const list= (params)=>{return axios.get('/helmet/api/teams/info/list/'+params.page+'/'+params.pageSize, {params:{query: params.query}}); }
export const add= (params)=>{return axios.post("/helmet/api/teams",params)}
export const update = (params)=>{return axios.put("/helmet/api/teams",params)}
