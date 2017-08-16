import axios from 'axios';
export const list= (params)=>{return axios.get('/helmet/api/helmets/list/'+params.page+'/'+params.pageSize, {params:{filterOption: params.filterOption, queryMac: params.queryMac}}); }
export const del = (params)=>{return axios.post("/helmet/api/helmets/delete/",params)}
export const add = (params)=>{return axios.post("/helmet/api/helmets",params)}
export const update = (params)=>{return axios.put("/helmet/api/helmets",params)}
export const groupList = ()=>{return axios.get("/helmet/api/teams/info/list")}
export const handleGroup = (params)=>{return axios.post("/helmet/api/teams/helmets/one", params)}
export const reboot = (params)=>{return axios.post("/helmet/api/helmets/reboot", params)}
