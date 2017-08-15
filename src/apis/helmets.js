import axios from 'axios';
export const list= (params)=>{return axios.get('/api/helmets/list/'+params.page+'/'+params.pageSize, {params:{filterOption: params.filterOption, queryMac: params.queryMac}}); }
export const del = (params)=>{return axios.post("/api/helmets/delete/",params)}
export const add = (params)=>{return axios.post("/api/helmets",params)}
export const update = (params)=>{return axios.put("/api/helmets",params)}
export const groupList = ()=>{return axios.get("/api/teams/info/list")}
export const handleGroup = (params)=>{return axios.post("/api/teams/helmets/one", params)}
export const reboot = (params)=>{return axios.post("/api/helmets/reboot", params)}
