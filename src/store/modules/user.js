import * as types from '../types'

const state = {
    UserBasicInfo : {
        School :'湖南科技大学',
        Academy : '计算机科学与学院',
        Major : '软件工程',
        Job : '前端工程师'
    }
}

const actions = {
    SetBasicUserInfo ({commit}, JsonData) {
        commit(types.SET_USER_BASIC_INFO, {body: JsonData})
    }
}

const mutations = {
    [types.SET_USER_BASIC_INFO] (state, payload) {
        // console.log(payload)
        state.UserBasicInfo.School = payload.body.School
        state.UserBasicInfo.Academy = payload.body.Academy
        state.UserBasicInfo.Major = payload.body.Major
        state.UserBasicInfo.Job = payload.body.Job
        sessionStorage.setItem('Auth', JSON.stringify(state.UserBasicInfo))
    }
}

export default {
    state,
    actions,
    mutations
}