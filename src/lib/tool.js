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
    },

    /**
     * 链接地址验证
     * @param phone
     * @return string
    */
   CheckURLAddress (address) {
        let strRegex = "^((https|http|ftp|rtsp|mms)?://)"       
                      + "?(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?" //ftp的user@      
                      + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184      
                      + "|" // 允许IP和DOMAIN（域名）      
                      + "([0-9a-zA-Z_!~*'()-]+\.)*" // 域名- www.      
                      + "([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z]\." // 二级域名      
                      + "[a-zA-Z]{2,6})" // first level domain- .com or .museum      
                      + "(:[0-9]{1,4})?" // 端口- :80      
                      + "((/?)|"       
                      + "(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?)$"; 
        let validateURL = new RegExp(strRegex)
        return validateURL.test(address);

   }

}