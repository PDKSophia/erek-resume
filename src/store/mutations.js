const mutations = {
    // 存储用户信息
    ADD_USER_SELECT (state, Auth) {
        sessionStorage.setItem('Auth', JSON.stringify(Auth))
        state.Auth.school   = Auth.School
        state.Auth.academy  = Auth.Academy
        state.Auth.major    = Auth.Major
        state.Auth.job      = Auth.Job
    }
}

export default mutations;