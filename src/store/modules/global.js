import * as types from '../types'
import { platform } from 'os';

const state = {
    theme : 'light',
    totalLink : [
        {
            id: '1',
            l_name : 'ZhaiKe',
            l_address : 'http://zhaike.pengdaokuan.cn',
            l_author : 'PengDaoKuan',
        },
        {
            id: '2',
            l_name : 'Yun Resume',
            l_address : 'http://zhaike.pengdaokuan.cn/YunResume',
            l_author : 'PengDaoKuan',
        }
    ],
    CardDeveloper : [
        {
            Name : '彭道宽',
            Job : '前端工程师',
            Skill : 'Vue.js & ThinkPHP5',
            Avatar : require('../../assets/tmg.png'),
            Summary : 'Web / PHP / BaiChiZhan'
        },
        
    ]
}

const actions = {
    SetManageTheme ({commit}, theme){
        commit(types.SET_MANAGEMENT_THEME, theme)
    },
    SetAddOtherLink ({commit}, jsonData) {
        commit(types.SET_ADD_OTHER_LINK,  {body: jsonData})
    },
    DeleteOtherLink ({commit}, index){
        commit(types.DEL_ONE_OTHER_LINK, index)
    },
    SetAddDeveloper ({commit}, jsonData) {
        commit(types.SET_ADD_ONE_DEVELOPER, {body: jsonData})
    },
    DeleteOneDeveloper ({commit}, index) {
        commit(types.DEL_ONE_DEVELOPER, index)
    }
}

const mutations = {
    [types.SET_MANAGEMENT_THEME](state, theme){
        state.theme = theme
    },
    [types.SET_ADD_OTHER_LINK](state, payload){
        state.totalLink.push({
            id: state.totalLink.length+1,
            l_name : payload.body.linkName,
            l_address : payload.body.linkAddress,
            l_author : payload.body.linkAuthor,
        })
    },
    [types.DEL_ONE_OTHER_LINK](state, index){
        state.totalLink.splice(index, 1)
    },
    [types.SET_ADD_ONE_DEVELOPER](state, payload){
        state.CardDeveloper.push({
            Name : payload.body.Dev_Name,
            Job : payload.body.Dev_Job,
            Skill : payload.body.Dev_Skill,
            Summary : payload.body.Dev_Summary,
            Avatar : payload.body.Dev_Avatar
        })
    },
    [types.DEL_ONE_DEVELOPER](state, index){
        state.CardDeveloper.splice(index, 1)
    }
}

export default {
    state,
    actions,
    mutations
  }
  