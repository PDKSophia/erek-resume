// 判断是移动端还是PC端
const browser = {
    versions : function () {
        var u = navigator.userAgent
        var app = navigator.appVersion
        return {//移动终端浏览器版本信息
            trident : u.indexOf("Trident") > -1,                           //IE内核
            presto : u.indexOf("Presto") > -1,                             //opera内核
            webKit : u.indexOf("AppleWebKit") > -1,                        //苹果谷歌内核
            gecko : u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1,   //火狐内核
            mobile : !!u.match(/AppleWebKit.*Mobile.*/),                   //是否为移动终端
            ios : !!u.match(/\(i[^;]+;(u;)?CPU.+Mac OS X/),                //iOS终端
            android : u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,//Android终端或UC浏览器
            iPhone : u.indexOf("iPhone") > -1,                             //是否都是iPhone会QQHD浏览器
            iPad : u.indexOf("iPad") > -1,                                 //是否是iPad
            webApp : u.indexOf("Safari") == -1                             //是否是web应用程序，没有头部与尾部
        }
    }(),
    language : (navigator.browserLanguage || navigator.language).toLowerCase()
}

export default browser;