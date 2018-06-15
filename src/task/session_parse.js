// 读取数据
const SessionAuth = {
    initGetter () {
        var user = JSON.parse(sessionStorage.getItem('SessionUser'))
        var Y_Auth = {
            School : '',
            Academy : '',
            Major : '',
            Job : '',
            Avatar : '',
            UserName : '',
            Area : '',
            Email : '',
            Phone : '',
            EnrolmentTime : '',
            GraduationTime : '',
            JobAddress : '',
            Certificate : [],
            Github : '',
            Blog : '',
            Hobby : '',
            Skill : '',
            Experience :[],
            // ExperienceSolve : [],   // 项目经验的问题解决
            Evaluation : []         // 自我评价
        }
        Y_Auth.School = user.School
        Y_Auth.Academy = user.Academy
        Y_Auth.Major = user.Major
        Y_Auth.Job = user.Job
        Y_Auth.Avatar = user.Avatar
        Y_Auth.UserName = user.UserName
        Y_Auth.Area = user.Area
        Y_Auth.Email = user.Email
        Y_Auth.Phone = user.Phone
        // 时间处理
        Y_Auth.EnrolmentTime = (user.EnrolmentTime).substring(0, 7)
        Y_Auth.GraduationTime = (user.GraduationTime).substring(0, 7)
        Y_Auth.JobAddress = user.JobAddress
        Y_Auth.Github = user.Github
        Y_Auth.Blog = user.Blog
        Y_Auth.Hobby = user.Hobby
        Y_Auth.Skill = user.Skill
        Y_Auth.Experience = user.Experience

        // 对证书处理
        let positionsCer = this.SearchSubstr(user.Certificate, '|')
        positionsCer.unshift(0)
        
        for(let i = 0; i < positionsCer.length; i++){
            Y_Auth.Certificate.push({
                'cer' : (user.Certificate).substr(positionsCer[i], positionsCer[i+1] - positionsCer[i])
            })
        }
        for(let j = 0; j < Y_Auth.Certificate.length; j++){
            let str = Y_Auth.Certificate[j].cer
            Y_Auth.Certificate[j].cer = str.replace("|"," ")
        }

        // 对项目经验处理
        for(let p = 0; p < user.Experience.length; p++)
        {
            // 时间处理
            Y_Auth.Experience[p].StartTime = (user.Experience[p].StartTime).substring(0, 7)
            Y_Auth.Experience[p].EndTime = (user.Experience[p].EndTime).substring(0, 7)
            let positionsArray = this.SearchSubstr(user.Experience[p].projectSolve, '}')
            positionsArray.unshift(0)
            Y_Auth.Experience[p]['solveAnswer'] = new Array()
            for(let i = 0; i < positionsArray.length-1; i++)
            {
                Y_Auth.Experience[p].solveAnswer.push({
                    'solve' : (user.Experience[p].projectSolve).substr(positionsArray[i], positionsArray[i+1] - positionsArray[i])
                })
            }
            for(let j = 0; j < Y_Auth.Experience[p].solveAnswer.length; j++)
            {
                let str = Y_Auth.Experience[p].solveAnswer[j].solve
                let regx_str1 = str.replace("{"," ")
                Y_Auth.Experience[p].solveAnswer[j].solve = regx_str1.replace("}"," ")
            }
        }
        // 对自我评价处理
        let positions = this.SearchSubstr(user.Evaluation, '|')
        positions.unshift(0)
        for(let i = 0; i < positions.length; i++){
            Y_Auth.Evaluation.push({
                'remark' : (user.Evaluation).substr(positions[i], positions[i+1] - positions[i])
            })
        }
        for(let j = 0; j < Y_Auth.Evaluation.length; j++){
            let str = Y_Auth.Evaluation[j].remark
            Y_Auth.Evaluation[j].remark = str.replace("|"," ")
        }
        return Y_Auth;
    },
    // 对 |  {} 的处理
    SearchSubstr (str, substr) {
        let positions = new Array()
        let pos = str.indexOf(substr)
        while(pos > -1){
            positions.push(pos)
            pos = str.indexOf(substr, pos+1)
        }
        return positions;
    },
    
}

export default SessionAuth;