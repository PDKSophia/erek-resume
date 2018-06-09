const mutations = {
    ChangeAuthUserID(state, user_id){
        state.Auth.user_id = user_id
    },

    UpdateAuthInfo(state, auth){
        state.Auth.avatar   = auth.avatar
        state.Auth.user_id  = auth.user_id
        state.Auth.username = auth.username
        state.Auth.sex      = auth.sex
        state.Auth.birthday = auth.birthday
        state.Auth.area     = auth.area
        state.Auth.email     = auth.email
    }
}

export default mutations;