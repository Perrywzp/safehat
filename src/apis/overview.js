/**
 * Created by wangzhipei on 2017/7/20.
 */
// export const overview = '/api/overview/overview'
export const overview = '/api/reports/realtime/helmets/overview'

//事件中心 &所有异常事件
// export const event='/api/overview/event'
export const event='/api/reports/realtime/helmets/incidents'

//异常事件
// export const unusual='/api/overview/unusual'
export const unusual='/api/reports/realtime/helmets/incidents/teams'
//各组在线数
// export const hatNum='/api/overview/hatNum'
export const hatNum='/api/reports/realtime/helmets/online/teams'
// 佩戴率排行
// export const putHatRank='/api/overview/putHatRank'
export const putHatRank='/api/reports/realtime/helmets/wearrate/teams'
// 日周月佩戴率
// export const putHatRate='/api/overview/putHatRate'
export const putHatRate='/api/reports/history/helmets/wearrate'
