const Validate = {
    TypeArray : [false, false, false],
    CheckForm (Auth) {
        for(let i = 0; i < Object.keys(Auth).length; i++)
        {
            let key = Object.keys(Auth)[i]
            if(Auth[key] == '')
            {
                return false
            }
            else
            {
                switch(key){
                    case 'Email' :
                        this.FormEmail(Auth[key])
                        break;
                    case 'Phone' :
                        this.FormPhone(Auth[key])
                        break;
                    case 'Github' :
                        this.FormGithub(Auth[key])
                        break;
                    case 'Blog' :
                        return this.FormBlog(Auth[key])
                        break;
                }
                console.log(this.TypeArray)
                return this.TypeArray
            }
        }
    },
    FormEmail (value) {
        let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        let flag = reg.test(value)
        this.TypeArray[0] = flag
    },
    FormPhone (value) {
        let reg = /^1[3|4|5|8][0-9]\d{4,8}$/
        let flag = reg.test(value)
        this.TypeArray[1] = flag
    },
    FormGithub (value) {
        console.log(value)
    },
    FormBlog (value) {
        console.log(value)
    }
}

export default Validate;