import axios from 'axios';
export const list= (params)=>{return axios.get('/api/teams/info/list/'+params.page+'/'+params.pageSize, {params:{query: params.query}}); }
export const add= (params)=>{return axios.post("/api/teams",params)}
export const update = (params)=>{return axios.put("/api/teams",params)}