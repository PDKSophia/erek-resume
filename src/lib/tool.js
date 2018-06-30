import CryptoJS from 'crypto-js'

export default {
    /**
     * 地址栏参数获取
     * @param query
     * @returns {}
    */
    parseSearch(query) {
        let res = {}
        let resLength = Object.keys(query).length
        if(!resLength){
            res = {
                code : 401,
                message : '登陆异常，请重新登陆',
                link : '/manage'
            }
        }else{
            if(!!query.username && !!query.pwd){
                // 请求api判断是否正确
                res = {
                    code : 200,
                    message : '登陆成功',
                    link : ''
                }
            }else{
                res = {
                    code : 402,
                    message : '登陆异常，请重新登陆',
                    link : '/manage'
                }
            }
        }
        return res;
    },

    /**
     * 密码加密
     * @param pwd
     * @return string
    */
    encryptByDES(pwd){
        let message = 'yum resume by ticknet'
        const keyHex = CryptoJS.enc.Utf8.parse(pwd);
        const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }

}